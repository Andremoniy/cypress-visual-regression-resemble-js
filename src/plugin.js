const fs = require('fs');
const path = require('path');

const sanitize = require('sanitize-filename');
const compareImages = require('resemblejs/compareImages');

const {
  createFolder,
  errorSerialize,
  getActualSnapshotsDirectory,
  getSubfolderInSnapshots,
} = require('./utils');

let SNAPSHOT_BASE_DIRECTORY;
let SNAPSHOT_DIFF_DIRECTORY;
let SNAPSHOT_ACTUAL_DIRECTORY;
let ALWAYS_GENERATE_DIFF;

function setupSnapshotPaths(args) {
  SNAPSHOT_BASE_DIRECTORY = args.baseDir || getSubfolderInSnapshots('base');

  SNAPSHOT_DIFF_DIRECTORY = args.diffDir || getSubfolderInSnapshots('diff');
}

function setupDiffImageGeneration(args) {
  ALWAYS_GENERATE_DIFF = true;
  if (args.keepDiff === false) ALWAYS_GENERATE_DIFF = false;
}

function visualRegressionCopy(args) {
  setupSnapshotPaths(args);
  const baseDir = path.join(SNAPSHOT_BASE_DIRECTORY, args.specName);
  const from = path.join(
    SNAPSHOT_ACTUAL_DIRECTORY,
    args.specName,
    `${args.from}.png`
  );
  const to = path.join(baseDir, `${args.to}.png`);

  return createFolder(baseDir, false).then(() => {
    fs.copyFileSync(from, to);
    return true;
  });
}

async function compareSnapshotsPlugin(args) {
  setupSnapshotPaths(args);
  setupDiffImageGeneration(args);

  const fileName = sanitize(args.fileName);

  const options = {
    actualImage: path.join(
      SNAPSHOT_ACTUAL_DIRECTORY,
      args.specDirectory,
      `${fileName}-actual.png`
    ),
    expectedImage: path.join(
      SNAPSHOT_BASE_DIRECTORY,
      args.specDirectory,
      `${fileName}-base.png`
    ),
    diffImage: path.join(
      SNAPSHOT_DIFF_DIRECTORY,
      args.specDirectory,
      `${fileName}-diff.png`
    ),
  };

  let percentage = 0;
  try {
    await createFolder(SNAPSHOT_DIFF_DIRECTORY, args.failSilently);

    const compareImagesOptions = {
      output: {
        errorColor: {
          red: 255,
          green: 0,
          blue: 255,
        },
        errorType: 'movement',
        transparency: 0.3,
        largeImageThreshold: 1200,
        useCrossOrigin: false,
        outputDiff: true,
      },
      scaleToSameSize: true,
      ignore: 'antialiasing',
    };

    const actualImageData = fs.readFileSync(options.actualImage);
    const expectedImageData = fs.readFileSync(options.expectedImage);
    const data = await compareImages(
      actualImageData,
      expectedImageData,
      compareImagesOptions
    );
    percentage = data.misMatchPercentage / 100;

    if (percentage > args.errorThreshold) {
      const specFolder = path.join(SNAPSHOT_DIFF_DIRECTORY, args.specDirectory);
      await createFolder(specFolder, args.failSilently);
      await fs.writeFile(options.diffImage, data.getBuffer());
      throw new Error(
        `The "${fileName}" image is different. Threshold limit exceeded! \nExpected: ${args.errorThreshold} \nActual: ${percentage}`
      );
    } else if (ALWAYS_GENERATE_DIFF) {
      const specFolder = path.join(SNAPSHOT_DIFF_DIRECTORY, args.specDirectory);
      await createFolder(specFolder, args.failSilently);
      await fs.writeFile(options.diffImage, data.getBuffer());
    }
  } catch (error) {
    return { error: errorSerialize(error) };
  }
  return {
    percentage,
  };
}

function getCompareSnapshotsPlugin(on, config) {
  SNAPSHOT_ACTUAL_DIRECTORY = getActualSnapshotsDirectory(config);
  on('task', {
    compareSnapshotsPlugin,
    visualRegressionCopy,
  });
}

module.exports = getCompareSnapshotsPlugin;
