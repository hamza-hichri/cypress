describe("tables functions", () => {
  beforeEach("login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();
    //go to customers
    cy.get(".btn-close").click();
    cy.get(".parent.collapsed[href='#collapse-5']").click();
    cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();
  });

  it("table counts", () => {
    cy.get(
      "#form-customer > div.table-responsive > table > tbody > tr "
    ).should("have.length", "10");
    cy.get(
      "#form-customer > div.table-responsive > table > thead >tr > td"
    ).should("have.length", "7");
  });

  it("check cell data", () => {
    cy.get(
      "#form-customer > div.table-responsive > table > tbody > tr:nth-child(5) > td:nth-child(3)"
    ).should("have.text", "princytrainings4@gmail.com");
  });

  it("read all data in a page", () => {
    cy.get("#form-customer > div.table-responsive > table > tbody > tr ").each(
      ($row, index, rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it("pagination", () => {
    let pages;
    cy.get(".col-sm-6.text-end").then((e) => {
      let myText = e.text();
      pages = myText.substring(
        myText.indexOf("(") + 1,
        myText.indexOf("Pages") - 1
      );
      cy.log("total nb of pages = " + pages);
    });
  });
});
