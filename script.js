// --- Navigation : effet de survol des liens ---
["accueil", "activites", "inscription", "partenaires"].forEach(function (id) {
  let lien = document.querySelector("#" + id);
  lien.addEventListener("mouseenter", function () {
    lien.style.color = "red";
  });
  lien.addEventListener("mouseleave", function () {
    lien.style.color = "black";
  });
});

// --- Validation du formulaire d'inscription ---
// Correction : chaque champ est désormais validé individuellement
// (auparavant, toutes les validations vérifiaient le champ "nom",
// bug détecté grâce à la suite de tests Cypress).
let tableau = document.getElementById("tableau");

let champs = [
  { input: "prenom", erreur: "erreurPrenom", message: "veuillez entrer votre prénom" },
  { input: "nom", erreur: "erreurNom", message: "veuillez entrer votre nom" },
  { input: "email", erreur: "erreurEmail", message: "veuillez entrer votre Email" },
  { input: "telephone", erreur: "erreurTelephone", message: "veuillez entrer votre Telephone" },
  { input: "naissance", erreur: "erreurNaissance", message: "veuillez entrer votre date de naissance" },
];

tableau.addEventListener("submit", function (e) {
  let nbErreurs = 0;

  champs.forEach(function (champ) {
    let input = document.getElementById(champ.input);
    let zoneErreur = document.getElementById(champ.erreur);

    if (input.value.trim() === "") {
      zoneErreur.innerText = champ.message;
      nbErreurs++;
    } else {
      zoneErreur.innerText = "";
    }
  });

  if (nbErreurs > 0) {
    e.preventDefault();
  }
});
