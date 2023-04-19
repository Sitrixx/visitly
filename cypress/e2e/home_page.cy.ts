const links = [
  { id: "#github-link", url: "https://github.com/myprofile" },
  { id: "#linkedin-link", url: "https://www.linkedin.com/in/myprofile" },
  { id: "#malt-link", url: "https://www.malt.fr/profile/myprofile" },
  { id: "#buymeacoffee-link", url: "https://www.buymeacoffee.com/myprofile" },
];

describe("Home page with widgets", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("LINKS");

    cy.wait(1000);
  });

  links.forEach((link) => {
    it(`.click() - navigate to ${link.id} profile page`, () => {
      cy.get(link.id).should("be.visible").click();
    });
  });

  it(".type() - write a query in the textbox", () => {
    cy.get("#chatbox-input")
      .type("What is your name ?")
      .should("have.value", "What is your name ?");

    cy.get("#chatbox-button").click();

    cy.get("#chatbox-input").should("have.value", "");
  });

  it(".request() - make an GET request", () => {
    cy.request("api/vscode").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("project");
    });
  });
});
