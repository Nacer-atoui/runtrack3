const btn = document.getElementById("button")

let compteur = 0;

function addone() {
    compteur++;
    document.getElementById("compteur").textContent = compteur;

}

btn.addEventListener("click", addone);
