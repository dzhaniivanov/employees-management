/// <reference types="cypress" />
describe("add employee flow", () => {
  it("should add a new employee successfully", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Add Employee").click();
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="email"]').type("a9gCt@example.com");
    cy.get('input[name="jobTitle"]').type("QA");
    cy.get('[data-cy="submit-btn"]').click();
    cy.url().should("include", "/");
    cy.contains("John");
    cy.contains("Doe");
  });
});
