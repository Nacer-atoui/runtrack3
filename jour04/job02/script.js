function jsonValueKey(jsonStr, key){

    try {
        const data = JSON.parse(jsonStr);
        if (key in data) {
            console.log(`${key} :`, data[key]);
        } else {
            console.log("Clé inexistante :", key);
        }
        
    } catch {
        console.log("Erreur : JSON invalide");
    }
    
}
const tabStr = '{ "name": "La Plateforme_", "address": "8 rue d’hozier", "city": "Marseille", "nb_staff": 11, "creation":"2019" }';
jsonValueKey(tabStr, "city");


