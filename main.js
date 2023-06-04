function formsubmit() {
    var username = document.getElementById("usernm").value;
    var password = document.getElementById("pswd").value;
    alert(username+ " " + password)
}




















function quant() {
    var quantity = prompt("How much robux do you want?")
    //var quant2 = +quantity
    if (Number.isInteger(+quantity)) {
        confrm(+quantity)
    }
    else {
        alert("Please enter a integer")
        quant()
    }

    
}

function confrm(quantity) {
    var correct = confirm("You want " + quantity + " robux? Click OK if yes, Cancel if no.")

    if (correct) {
        alert("Ok, please wait...")
        setTimeout(getUserID, 500)
    }
    else {
        quant()
    }
}



  
  function getUserID() {
    alert("Loading...");
    var username = prompt("Access denied! Please enter your username to continue.");
}
  //FileReader 
  