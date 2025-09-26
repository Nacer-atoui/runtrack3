// Je fais un tableau contenant toute les touches à taper
const konami = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"  
];

let p = 0; // j'initialise une position "0"

// Je fait une fonction qui gère la couleur de mon body
function couleur() {
    document.body.style.backgroundColor = "#0062ff"
}

// Je fais une ecoute d'evenement avec un parametre keydown qui va capter les touches qui sont présser 
document.addEventListener("keydown", function(event) {
    if (event.key === konami[p]){ 
        p++; // je met une condition qui stipule que si une touche du clavié qui est dans mon tableau konami est présser alors incremente la position dans mon tableau 
        if (p === konami.length){
            couleur();
            p = 0; // cette 2ème condition dit que si la position dans mon tableau est égal à la totalité de mon tableau active la fonction couleur et reviens a 0
        }
    } else {
        p = 0 // si non revien à 0
    }
});



