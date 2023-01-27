/// <reference types="cypress" />

describe("Testing Regression", () => {
  it("takes a snapshot that should replace the base image", () => {
    cy.visit("/");
    cy.contains("Test title for visual regression");
    cy.compareSnapshot("test-generate");
  });

    it("takes a snapshot that should not replace the base image", () => {
    cy.visit("/");
    cy.contains("Test title for visual regression");
    cy.compareSnapshot("test-not-generate");
  });
});
