
// Execution de la fonction quand la fenetre est complètement chargée
window.onload = () => {
    const footEl = document.getElementById("foot") // Récupère et stock la référence ("foot") dans le html
    window.addEventListener("scroll", () => { // On écoute l'évènement (scroll)
        let hauteur = document.documentElement.scrollHeight - window.innerHeight; //On dit que la valeur de la variable (hauteur) est la hauteur totale du document et la hauteur de la fenètre visible
        let position = window.scrollY; // cette variable donne la position actuelle du scroll
        let largeur = document.documentElement.clientWidth; // largeur du viewport en pixels (sert à convertir le ratio de scroll en largeur en pixels)

        let ratio = hauteur ? position / hauteur : 0; //Calcul de la proportion de la page qu'on a parcouru
        let foot = ratio * largeur; //Convertit le ratio en pixels de largeur

        footEl.style.width = foot + "px"; //Applique la largeur calculée à l'element foot + px pour l'unité en pixels
        
        let color = ratio * 200; //Calcul de la valeur "color" proportionnelle au ratio
        footEl.style.backgroundColor = `hsl(${color}, 100%, 50%)`; //Changement de couleur de fond en utilisant hsl, hue = color ensuite saturation et luminosité
        
        
    });
};



