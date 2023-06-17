var count = 0
function addTask(del) {
    event.preventDefault();
    var text = document.getElementById("newTask").value;
    if (del == "False") {
      if (!text) {
        alert("Please enter a task!");
      } else {
        count++;
        var para = document.createElement("p");
        para.innerText = text;
        para.classList.add("task"); // Add the "task" class to the created <p> element
  
        let text2 = document.getElementById("newTask");
        text2.value = ""; // Clear the value of the text field
  
        var taskContainer = document.getElementById("taskContainer");
        taskContainer.appendChild(para); // Append the task to the taskContainer
      }
    } else if (del == "Tru") {
      clearLatest();
    } else {
      clearAll(count);
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