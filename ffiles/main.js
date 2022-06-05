let input = document.querySelector(".input");
let submit = document.querySelector(".Add");
let tasks = document.querySelector(".tasks");

// empty array to stor the tasks

let arrayOfTasks = [];

// Add Task
submit.Onclick = function(){
    if (input.value !== "") {
        addTaskToArray(input.value) //add Task To Array To Tasks
        input.value = ""; // empty input
    }
}

function addTaskToArray(tasksText){

}