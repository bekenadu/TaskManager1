const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);



function filterTasks(e) {
    let filterr = filter.value;
    let x = document.querySelectorAll('.collection-item');
    x.forEach((item) => {
        if (item.textcontent.indexOf(filterr)) {
            item.style.display = "none"
        }
        else {
            item.style.display = "block"
        }
    })
}

// Add New  Task Function definition 
function addNewTask(e) {

    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";
        return;
    }
    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul 
    taskList.appendChild(li);

    e.preventDefault(); //disable form submission
}


// Clear Task Function definition 
function clearAllTasks(e) {

    //  Second Way 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
        }

    }

}

