// Define UI Variables
const taskInput = document.querySelector("#task"); //the task input text field
const form = document.querySelector("#task-form"); //The form at the top
const filter = document.querySelector("#filter"); //the task filter text field
const taskList = document.querySelector(".collection"); //The UL
const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button

const reloadIcon = document.querySelector(".fa"); //the reload button at the top navigation
const sortAsc = document.querySelector(".sortAsc");
const sortDesc = document.querySelectorAll(".sortDesc");

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit
form.addEventListener("submit", addNewTask);
// Clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);
//   Filter Task
filter.addEventListener("keyup", filterTasks);
// Remove task event [event delegation]
taskList.addEventListener("click", removeTask);
// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);

sortAsc.addEventListener("click", sortAscending);

// Add New  Task Function definition
function addNewTask(e) {
    e.preventDefault(); //disable form submission

    // Check empty entry
    if (taskInput.value === "") {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task
    const li = document.createElement("li");
    const span = document.createElement("span");
    // Adding a class
    li.className = "collection-item";
    span.className = "task-date";
    //   span.style.display = "none";
    // Create text node and append it
    li.appendChild(document.createTextNode(taskInput.value));
    span.appendChild(document.createTextNode(new Date()));
    // Create new element for the link
    const link = document.createElement("a");
    // Add class and the x marker for a
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL
    taskList.appendChild(li);
    taskList.appendChild(span);
}

// Clear Task Function definition
function clearAllTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks function definition
function filterTasks(e) {
    let searchItem = filter.value;
    let collectionItems = document.querySelectorAll(".collection-item");
    collectionItems.forEach((item) => {
        if (item.textContent.indexOf(searchItem)) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    });
}

// Remove Task function definition
function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are You Sure about that ?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Reload Page Function
function reloadPage() {
    //using the reload fun on location object
    location.reload();
}
function sortAscending(e){

}
function sortDesending(e){
    
}