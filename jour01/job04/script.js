
function bisextile(année) {
    
    if (année % 4 == 0){
        return true;
    }
    else (année % 100 ==! 0); {
        return false;
    }
    
}
 
console.log (bisextile(2024))