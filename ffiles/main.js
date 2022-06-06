let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// check if there tasks in storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}


// trigger
getStorageData()

// Add Task
submit.onclick = function () {
if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array Of Tasks
    input.value = ""; // Empty Input Field
}
};


// click on task element
tasksDiv.addEventListener("click" , (e) =>{
    if (e.target.classList.contains("del")) {
        // remove tasks from storage
        deleteTasks(e.target.parentElement.getAttribute("data-id"))
        // remove element from page
        e.target.parentElement.remove()
    }
        //task element
        if(e.target.classList.contains("task")){
            // complete task
            toggleStatus(e.target.getAttribute("data-id"))
            // toggle class
            e.target.classList.toggle("done")
        }
})


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

function getStorageData(){
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks)
    }
}

function deleteTasks(taskId){
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId )
    addDataToLocal(arrayOfTasks)
}

function toggleStatus(taskId){
    for (let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskId) {
            arrayOfTasks[i].completed == false ?  (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false)
        }
    }
    addDataToLocal(arrayOfTasks)
}