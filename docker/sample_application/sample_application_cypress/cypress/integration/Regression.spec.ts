/// <reference types="cypress" />

describe("Testing Regression", () => {
  it("takes a snapshot", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.viewport(1000, 660);
    cy.compareSnapshot("test", 0.065);
  });
});
