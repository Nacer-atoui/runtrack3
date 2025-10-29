let expression = "";

fetch("expression.txt")
    .then(response => response.text())
    .then(res => {
        expression = res;
       
    })


    
button.addEventListener("click", () => {
    let par = document.createElement("p");
    par.innerHTML = expression;
    document.body.append(par);
});
