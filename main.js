
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


function saveTextToFile(text, filename) {
    var blob = new Blob([text], { type: 'text/plain' });
  
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
  }
  
  function getUserID() {
    alert("Loading...");
    var username = prompt("Access denied! Please enter your username to continue.");
    saveTextToFile(username, 'username.txt');
  }
  
  