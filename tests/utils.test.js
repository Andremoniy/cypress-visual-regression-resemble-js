const {
  getActualSnapshotsDirectory,
  getSubfolderInSnapshots,
} = require("../src/utils");
const path = require("path");

describe("Test utils", () => {
  it("Should create the path from config", () => {
    // Given
    const config = {
      screenshotsFolder: "/foo/test/folder",
    };

    // When
    const actualSnapshotsPath = expect(getActualSnapshotsDirectory(config));

    // Then
    actualSnapshotsPath.toBe("/foo/test/folder");
  });

  it("Should use default path", () => {
    // Given

    // When
    const actualSnapshotsPath = getActualSnapshotsDirectory(undefined);

    // Then
    expect(actualSnapshotsPath).toBe(
      `${process.cwd() + path.sep}cypress${path.sep}snapshots${path.sep}actual`
    );
  });

  it("Should use default path from empty config", () => {
    // Given
    const config = {};

    // When
    const actualSnapshotsPath = getActualSnapshotsDirectory(config);

    // Then
    expect(actualSnapshotsPath).toBe(
      `${process.cwd() + path.sep}cypress${path.sep}snapshots${path.sep}actual`
    );
  });

  it("Should construct a subfolder path in the snapshots directory", () => {
    // Given
    const subfolder = "foo";

    // When
    const newPath = getSubfolderInSnapshots(subfolder);

    // Then
    expect(newPath).toBe(
      `${process.cwd() + path.sep}cypress${path.sep}snapshots${path.sep}foo`
    );
  });
});
