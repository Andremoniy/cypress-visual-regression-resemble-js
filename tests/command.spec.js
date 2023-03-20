global.Cypress = {
  env: jest.fn(),
  log: () => null,
  config: () => "/cypress/screenshots",
  Commands: {
    add: jest.fn(),
  },
};

global.cy = {
  get: jest.fn(),
  screenshot: jest.fn(),
};
const compareSnapshotCommand = require("../src/command");

describe("compareSnapshot command", () => {
  it("should be added", () => {
    Cypress.Commands.add.mockReset();

    compareSnapshotCommand();

    expect(Cypress.Commands.add).toHaveBeenCalledWith(
      "compareSnapshot",
      { prevSubject: "optional" },
      expect.any(Function)
    );
  });
});
