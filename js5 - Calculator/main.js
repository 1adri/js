var state = ""
addarray = []
subarray = []
mularray = []
divarray = []
function add() {
    valHTML = document.getElementById("value").innerHTML
    document.getElementById("value").innerHTML = 0
    state = "add"
    valHTML = +valHTML
    addarray.push(valHTML)
    console.log(addarray)
}

function subtract() {
    valHTML = document.getElementById("value").innerHTML
    document.getElementById("value").innerHTML = 0
    state = "subtract"
    valHTML = +valHTML
    subarray.unshift(valHTML)
    console.log(subarray)
}
function multiply() {
    valHTML = document.getElementById("value").innerHTML
    document.getElementById("value").innerHTML = 0
    state = "multiply"
    valHTML = +valHTML
    mularray.push(valHTML)
    console.log(mularray, "mult")
}

function divide() {
    valHTML = document.getElementById("value").innerHTML
    document.getElementById("value").innerHTML = 0
    state = "divide"
    valHTML = +valHTML
    divarray.unshift(valHTML)
    console.log(divarray)
}

function num(num2) {
    let val = document.getElementById("value")
    if (val.innerHTML==0) {
        val.innerHTML = +num2
    } else {
        val.innerHTML = val.innerHTML+num2

    }
}

function solv() {
    val2 = document.getElementById("value").innerHTML
    if (val2!=0) {
        if (state=="add") {
            addarray.push(+val2)
        } else if (state=="subtract") {
            subarray.unshift(+val2)
        } else if (state=="multiply") {
            mularray.push(+val2)
        } else if (state=="divide") {
            divarray.unshift(+val2)
        }
    }
    //alert(addarray)
    
    if (state=="add") {
        let arraylen = addarray.length

        let newsum = 0
        console.log(addarray)
        for (let i=arraylen-1; i>=0;i--) {
            newsum = newsum +++ addarray[i]
        }
        document.getElementById("value").innerHTML = 0
        addarray = []
        alert(newsum)
    }
    
    if (state=="subtract") {
        let arraylen = subarray.length
        let newsum = 0
        console.log(subarray)
        for (let i=arraylen-1; i>0;i--) {
            if (i==arraylen-1) {
                newsum = newsum +++ (subarray[i] - subarray[i-1])
            } else {
                newsum = newsum - subarray[i-1]
            }
        }
        document.getElementById("value").innerHTML = 0
        subarray = []
        alert(newsum)
    }
    if (state=="multiply") {
        let arraylen = mularray.length
        let newsum = 1
        console.log(mularray, "hi")
        for (let i=arraylen-1; i>=0;i--) {
            newsum = newsum * mularray[i]
        }
        document.getElementById("value").innerHTML = 0
        mularray = []
        alert(newsum)
    }
    if (state=="divide") {
        let arraylen = divarray.length
        let newsum = 0
        console.log(divarray)
        for (let i=arraylen-1; i>0;i--) {
            if (i==arraylen-1) {
                newsum = newsum +++ (divarray[i] / divarray[i-1])
            } else {
                newsum = newsum / divarray[i-1]
            }
        }
        document.getElementById("value").innerHTML = 0
        divarray = []
        alert(newsum)
    }

}