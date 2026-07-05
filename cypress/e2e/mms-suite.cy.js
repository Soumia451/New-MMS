/// <reference types="cypress" />

// Suite de tests E2E — Site du club de football MMS
// Couvre : affichage de la page, navigation, et validation
// du formulaire d'inscription (cas passants et non passants).

describe("Page d'accueil du club MMS", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("affiche le titre et la section de bienvenue", () => {
    cy.title().should("eq", "Football Club MMS");
    cy.contains("h1", "Bienvenue sur le site officiel du MMS !").should("be.visible");
  });

  it("affiche la navigation avec ses 4 liens", () => {
    cy.get("#accueil").should("be.visible");
    cy.get("#activites").should("be.visible");
    cy.get("#inscription").should("be.visible");
    cy.get("#partenaires").should("be.visible");
  });

  it("affiche le tableau des activités avec 4 catégories", () => {
    cy.contains("h1", "Activités du club MMS").should("be.visible");
    cy.get(".table-container table tbody tr").should("have.length", 4);
  });
});

describe("Formulaire d'inscription au club MMS", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  // Remplit tous les champs sauf ceux passés en paramètre
  const remplirFormulaireSauf = (champsExclus = []) => {
    const valeurs = {
      "#prenom": "Soumia",
      "#nom": "Sadki",
      "#email": "soumia@example.com",
      "#telephone": "0601020304",
    };
    Object.entries(valeurs).forEach(([selecteur, valeur]) => {
      if (!champsExclus.includes(selecteur)) {
        cy.get(selecteur).type(valeur);
      }
    });
    if (!champsExclus.includes("#naissance")) {
      cy.get("#naissance").type("1995-05-15");
    }
  };

  it("inscription nominale : tous les champs remplis, aucune erreur affichée", () => {
    remplirFormulaireSauf([]);
    cy.get("#position").select("milieu");
    cy.get("#commentaires").type("Inscription de test");
    cy.get('input[type="submit"]').click();
    cy.get(".erreur").each(($zone) => {
      cy.wrap($zone).should("have.text", "");
    });
  });

  it("bloque la soumission et affiche une erreur si le prénom est vide", () => {
    remplirFormulaireSauf(["#prenom"]);
    cy.get('input[type="submit"]').click();
    cy.get("#erreurPrenom").should("contain", "veuillez entrer votre prénom");
  });

  it("bloque la soumission et affiche une erreur si le nom est vide", () => {
    remplirFormulaireSauf(["#nom"]);
    cy.get('input[type="submit"]').click();
    cy.get("#erreurNom").should("contain", "veuillez entrer votre nom");
  });

  it("bloque la soumission et affiche une erreur si l'email est vide", () => {
    remplirFormulaireSauf(["#email"]);
    cy.get('input[type="submit"]').click();
    cy.get("#erreurEmail").should("contain", "veuillez entrer votre Email");
  });

  it("bloque la soumission et affiche une erreur si le téléphone est vide", () => {
    remplirFormulaireSauf(["#telephone"]);
    cy.get('input[type="submit"]').click();
    cy.get("#erreurTelephone").should("contain", "veuillez entrer votre Telephone");
  });

  it("bloque la soumission et affiche une erreur si la date de naissance est vide", () => {
    remplirFormulaireSauf(["#naissance"]);
    cy.get('input[type="submit"]').click();
    cy.get("#erreurNaissance").should("contain", "veuillez entrer votre date de naissance");
  });

  it("affiche les 5 messages d'erreur si le formulaire est soumis vide", () => {
    cy.get('input[type="submit"]').click();
    cy.get("#erreurPrenom").should("not.have.text", "");
    cy.get("#erreurNom").should("not.have.text", "");
    cy.get("#erreurEmail").should("not.have.text", "");
    cy.get("#erreurTelephone").should("not.have.text", "");
    cy.get("#erreurNaissance").should("not.have.text", "");
  });

  it("propose les 4 positions dans la liste déroulante", () => {
    cy.get("#position option").should("have.length", 4);
    cy.get("#position").select("gardien").should("have.value", "gardien");
  });

  it("les messages d'erreur disparaissent après correction des champs", () => {
    cy.get('input[type="submit"]').click();
    cy.get("#erreurNom").should("not.have.text", "");
    remplirFormulaireSauf([]);
    cy.get('input[type="submit"]').click();
    cy.get(".erreur").each(($zone) => {
      cy.wrap($zone).should("have.text", "");
    });
  });
});
