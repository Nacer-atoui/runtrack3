const btn = document.getElementById("button")

let isShowhide = false;

function showhide() {

    if (isShowhide) {
        console.clear();
        isShowhide = false;
    } else {
        const c = document.getElementById("citation").textContent;
        console.log(c);
        isShowhide = true;
    }

}

btn.addEventListener("click", showhide);
