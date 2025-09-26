const textarea = document.getElementById("keylogger")

document.addEventListener("keydown", function(event) {
    let key = event.key

    if (/^[a-zA-Z]$/.test(key)) {
    if (document.activeElement === textarea) {
        textarea.value += key + key;
    } else {
        textarea.value += key;
    }
}
})



