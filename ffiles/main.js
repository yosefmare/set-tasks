let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Add Task
submit.onclick = function () {
if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array Of Tasks
    input.value = ""; // Empty Input Field
}
};


function addTaskToArray(taskText) {
  // Task Data
const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
};
  // Push Task To Array Of Tasks
arrayOfTasks.push(task);
// console.log(arrayOfTasks);
//add tasks to page
    addElementsToPageFrom(arrayOfTasks)

// add tasks to local storage
    addDataToLocal(arrayOfTasks)
}

function addElementsToPageFrom(arrayOfTasks){
    // empty tasks div
    tasksDiv.innerHTML = "";
    // looping on array of tasks
    arrayOfTasks.forEach((task) => {
        // create main div 
        let div = document.createElement("div");
        div.className = "task";
        //check if the task is done
        if (task.completed) {
            div.className = "task Done";
        }
        div.setAttribute("data-id" , task.id );
        div.appendChild(document.createTextNode(task.title));
        // create delete button
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"))
        // append button to main div
        div.appendChild(span);
        // add task div to tasks container
        tasksDiv.appendChild(div);
    });
}

function addDataToLocal(arrayOfTasks){
    window.localStorage.setItem("tasks" , JSON.stringify(arrayOfTasks))
}