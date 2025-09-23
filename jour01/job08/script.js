function sommenombrespremiers(a){

    if (a < 2) return false;
    for (let i = 2; i <= a-1; i++) {
        if (a % i === 0){
            return `${a} n'est pas un nombre premier !` ;
        }
    }

    return `${a} est un nombre premier !`;


}

console.log(sommenombrespremiers(6));
console.log(sommenombrespremiers(2));