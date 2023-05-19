
cont();
function cont() {
    var answer = prompt("Do you wish to continue?")
    if (answer == "Yes") {
        alert("You have continued")
    } else {
        alert("You have not continued")
        window.history.back();

    }
}
