/// <reference types="cypress" />

describe("Testing Regression", () => {
  it("takes a snapshot", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.compareSnapshot("test", 0.06);
  });
});
