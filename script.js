let accueil = document.querySelector("#accueil")
let activites = document.querySelector("#activites")
let inscription = document.querySelector("#inscription")
let partenaires = document.querySelector("#partenaires")


accueil.addEventListener("mouseenter",function(){   
    accueil.style.color = "red"
})

accueil.addEventListener("mouseleave",function(){   
    accueil.style.color = "black"
})

activites.addEventListener("mouseenter",function(){   
    activites.style.color = "red"
})
activites.addEventListener("mouseleave",function(){   
    activites.style.color = "black"
})

inscription.addEventListener("mouseenter",function(){   
    inscription.style.color = "red"
})
inscription.addEventListener("mouseleave",function(){   
    inscription.style.color = "black"
})

partenaires.addEventListener("mouseenter", function(){   
    partenaires.style.color = "red"
})

partenaires.addEventListener("mouseleave",function(){   
    partenaires.style.color = "black"
})





let nom = document.querySelector("#nom")
let erreurNom = document.getElementById("erreurNom")
let tableau = document.getElementById("tableau")

tableau.addEventListener("submit", function(e){
   let nomMessage = []
    if (nom.value.trim() === "")  {
        nomMessage = "veuillez entrer votre nom"
    }
   if (nomMessage.length >0 ){
    e.preventDefault()
       erreurNom.innerText = nomMessage
    }
    

}) 

tableau.addEventListener("submit", function(e){
    let nomMessage = []
     if (nom.value.trim() === "")  {
         nomMessage = "veuillez entrer votre prénom"
     }
    if (nomMessage.length >0 ){
     e.preventDefault()
        erreurPrenom.innerText = nomMessage
     }

 
 }) 

 tableau.addEventListener("submit", function(e){
    let nomMessage = []
     if (nom.value.trim() === "")  {
         nomMessage = "veuillez entrer votre Email"
     }
    if (nomMessage.length >0 ){
     e.preventDefault()
        erreurEmail.innerText = nomMessage
     }
 
 }) 

 tableau.addEventListener("submit", function(e){
    let nomMessage = []
     if (nom.value.trim() === "")  {
         nomMessage = "veuillez entrer votre Telephone"
     }
    if (nomMessage.length >0 ){
     e.preventDefault()
        erreurTelephone.innerText = nomMessage
     }
 
 }) 

 tableau.addEventListener("submit", function(e){
    let nomMessage = []
     if (nom.value.trim() === "")  {
         nomMessage = "veuillez entrer votre date de naissance"
     }
    if (nomMessage.length >0 ){
     e.preventDefault()
        erreurNaissance.innerText = nomMessage
     }
 
 }) 




