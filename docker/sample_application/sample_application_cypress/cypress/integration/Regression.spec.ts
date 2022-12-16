/// <reference types="cypress" />

describe("Testing Regression", () => {
  it("takes a snapshot", () => {
    cy.visit("/");
    cy.viewport(1000, 660);
    cy.compareSnapshot("test", 0.07);
  });
});
