
// Déclaration d'un tableau avec les jours fériés de l'année 2020 au format date
let ferie = [ 
  "2020-01-01", 
  "2020-04-13", 
  "2020-05-01", 
  "2020-05-08", 
  "2020-05-21", 
  "2020-06-01", 
  "2020-07-14", 
  "2020-08-15", 
  "2020-11-01", 
  "2020-11-11", 
  "2020-12-25"  
];

// Fonction pour formater une date en français avec le jour de la semaine, le mois et l'année 

function dateFrançais(date){
    return new Intl.DateTimeFormat("fr-FR", {
        weekday: "long", // Affiche le jour de la semaine en toutes lettres 
        day: "numeric", // Affiche le numéro du jour du mois
        month: "long", // Affiche le mois en toutes lettres
        year: "numeric" // Affiche l'année
    }).format(date); // Application du format à la date passée en argument
}

// Fonction pour determiner si une date est un jour travaillé, un jour férié ou un week end
function jourtravaille(date){
    
    const d = new Date(date); // Transformation de la chaine de caractères en objet Date
    const ymd = d.toISOString().split("T")[0]; // On convertit la date au format AAAA-MM-JJ pour comparer avec le tableau des jours fériés

    // Vérifie si la date est dans le tableau des jours fériés 
    if (ferie.includes(ymd)) {
        return `${dateFrançais(d)} est un jour férié`;
    }

    const day = d.getDay();
    if (day === 0 || day === 6) {
        return `${dateFrançais(d)} est un week-end`;
    }

        return `${dateFrançais(d)} est un jour travaillé`;

    
}
document.write(jourtravaille("2020-01-01") + "<br/>");
document.write(jourtravaille("2020-01-04") + "<br/>");
document.write(jourtravaille("2020-04-13"));


