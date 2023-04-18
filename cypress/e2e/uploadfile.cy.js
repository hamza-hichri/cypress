describe("upload file", () => {
  it("single file upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("notes foll.pdf");
    cy.get("#file-submit").click();
    cy.get("#content > div > h3").should("have.text", "File Uploaded!");
  });
  it("file upload + rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "notes foll.pdf",
      fileName: "hamza.pdf",
    });
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("#content > div > h3").should("have.text", "File Uploaded!");
  });

  it("file upload drag and drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("notes foll.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.wait(3000);
    cy.get(
      "div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span"
    ).should("have.text", "notes foll.pdf");
  });
  it("multiple file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile([
      "notes foll.pdf",
      "notes yasmine.pdf",
    ]);
    cy.wait(5000);
    cy.get(":nth-child(6) > strong").should(
      "not.contain.text",
      "No Files Selected"
    );
  });
});
