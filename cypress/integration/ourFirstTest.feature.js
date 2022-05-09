describe("Searching using Google", () => {
  beforeEach(() => {
    // ARRANGE
    cy.visit("https://google.com");
    cy.get("button").contains("Jag godkänner").click();
  });

  describe("For Craft Academy", () => {
    beforeEach(() => {
      // ACT
      cy.get("[name=q]").type("Craft Academy");
      cy.get("input").contains("Sök på Google").click({ force: true });
    });

    it("is expected to return Craft Academy as top result", () => {
      // ASSERT
      cy.get("#rso")
        .children()
        .first()
        .should("contain.text", "Craft Academy - Programmering");
    });
  });

  describe("for Polystar", () => {
    beforeEach(() => {
      // ACT
      cy.get("[name=q]").type("Polystar");
      cy.get("input").contains("Sök på Google").click({ force: true });
    });

    it("is expected to return Plystar as top result", () => {
      // ASSERT
      cy.get("#rso")
        .children()
        .first()
        .should(
          "contain.text",
          "Elisa Polystar: Self-Driving Networks for CSPs Worldwide"
        );
    });
  });
});
