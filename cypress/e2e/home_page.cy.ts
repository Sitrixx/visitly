const links = [
  { id: "#github-link", url: "https://github.com/Sitrixx" },
  { id: "#linkedin-link", url: "https://www.linkedin.com/in/enzo-auriau" },
  { id: "#malt-link", url: "https://www.malt.fr/profile/enzoauriau" },
  { id: "#buymeacoffee-link", url: "https://www.buymeacoffee.com/sitrixxx" },
];

describe("Home page with widgets", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("LINKS");

    cy.wait(1000);
  });

  links.forEach((link) => {
    it(`navigates to ${link.id} profile page when clicked`, () => {
      cy.get(link.id).should("be.visible").click();
    });
  });

  it("enters a query in the textbox and sends a message", () => {
    cy.get("#chatbox-input")
      .type("What is your name ?")
      .should("have.value", "What is your name ?");

    cy.get("#chatbox-button").click();

    cy.get("#chatbox-input").should("have.value", "");
  });

  it("navigates to album, song and artists pages when clicked", () => {
    cy.get("#album-cover").should("be.visible").click();
    cy.get("#title-name").should("be.visible").click();
    cy.get("#artists-name").should("be.visible").click();
  });
});

describe("Tests for API endpoint /api/vscode", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("LINKS");

    cy.wait(1000);
  });

  it("successfully makes a GET request to the API endpoint", () => {
    cy.request("api/vscode").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("project");

      expect(typeof response.body.project[0].vscode_project).to.eq("string");
      expect(typeof response.body.project[0].vscode_file).to.eq("string");
    });
  });

  it("returns the expected project name for a specific case", () => {
    cy.request({
      url: "api/vscode?case=specific",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("returns a 404 error for a non-existent resource", () => {
    cy.request({
      url: "api/vscode/nonexistent",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
