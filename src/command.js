const { deserializeError } = require('./utils-browser');

/* eslint-disable no-undef */

function compareSnapshot(defaultScreenshotOptions) {
  return (subject, name, params = {}, scrollSelectorIntoView) => {
    const SNAPSHOT_BASE_DIRECTORY = Cypress.env('SNAPSHOT_BASE_DIRECTORY');
    const SNAPSHOT_DIFF_DIRECTORY = Cypress.env('SNAPSHOT_DIFF_DIRECTORY');
    const ALWAYS_GENERATE_DIFF = Cypress.env('ALWAYS_GENERATE_DIFF');

    let screenshotOptions = defaultScreenshotOptions;
    let errorThreshold = 0.0;
    if (typeof params === 'number') {
      errorThreshold = params;
    } else if (typeof params === 'object') {
      errorThreshold = params.errorThreshold || defaultScreenshotOptions && defaultScreenshotOptions.errorThreshold || 0.0;
      screenshotOptions = Object.assign({}, defaultScreenshotOptions, params);
    }

    if (scrollSelectorIntoView) cy.get(scrollSelectorIntoView).scrollIntoView();

    let title = 'actual';
    if (Cypress.env('type') === 'base') {
      title = 'base';
    }

    // take snapshot
    const objToOperateOn = subject ? cy.get(subject) : cy;
    const fileName = `${name}-${title}`;
    if (Cypress.env('type') === 'base') {
      const identifier = `${fileName}-${new Date().getTime()}`;
      objToOperateOn.screenshot(`${identifier}`, screenshotOptions).task('visualRegressionCopy', {
        specName: Cypress.spec.name,
        from: `${identifier}`,
        to: `${fileName}`,
        baseDir: SNAPSHOT_BASE_DIRECTORY
      });
    } else {
      objToOperateOn.screenshot(`${fileName}`, screenshotOptions);
    }

    // run visual tests
    if (Cypress.env('type') === 'actual') {
      const options = {
        fileName: name,
        specDirectory: Cypress.spec.name,
        baseDir: SNAPSHOT_BASE_DIRECTORY,
        diffDir: SNAPSHOT_DIFF_DIRECTORY,
        keepDiff: ALWAYS_GENERATE_DIFF,
        errorThreshold
      };
      cy.task('compareSnapshotsPlugin', options).then(results => {
        if (results.error) {
          throw deserializeError(results.error);
        }
      });
    }
  }
} 

function compareSnapshotCommand(defaultScreenshotOptions) {
  Cypress.Commands.add('compareSnapshot', { prevSubject: 'optional' }, compareSnapshot(defaultScreenshotOptions));
}

/* eslint-enable no-undef */

module.exports.compareSnapshotCommand = compareSnapshotCommand;
module.exports.compareSnapshot = compareSnapshot;
