var count = 0
function addTask(del) {
    event.preventDefault();
    var text = document.getElementById("newTask").value;
    //alert(del)
    if (del=="False") {
        if (!text) {
            alert("Please enter a task!");

        } else {
            count++
            var para = document.createElement("p");
            para.innerText = text;
            let text2 = document.getElementById("newTask");
            text2.value = ""; // Clear the value of the text field

            para.style.border = "2px solid blue"; 
            para.style.padding = "3px"; 
            para.style.margin="5px";
            para.style.display="inline-block";

            document.body.appendChild(para);
        }
} else if(del=="Tru") {
    clearLatest()
} else {
    clearAll(count)
}
}
function clearLatest() {
    let tasks = document.getElementsByTagName("p");
    let i = document.getElementsByTagName("p").length - 1
    let del = confirm('Are you sure you want to delete task "' + tasks[i].innerText + '"')
    
    if (del) {
        tasks[i].remove(); // Remove each task element from the DOM
    } else {
        alert("Not Deleting!")
    }
}

function clearAll(del2) {
    var del = confirm("Are you sure you want to delete "+document.getElementsByTagName("p").length+" task(s)?")
    if (del) {
        var tasks = document.getElementsByTagName("p");
        
        for (let i = tasks.length - 1; i >= 0; i--) {
          tasks[i].remove(); // Remove each task element from the DOM
    }} else {
        alert("Not Deleting!")
    }
}