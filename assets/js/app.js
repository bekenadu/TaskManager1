const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filtere = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button
const reloadIcon = document.querySelector('fa');
//Event
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
 
function clearAllTasks(e){
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
        }

    }

}


function addNewTask(e){
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


function filter(e){
    let filterr = filter.value;
    let x =document.querySelectorAll('.collection-item');
    x.forEach((item) => {
        if (item.textcontent.indexOf(filterr)){
                item.style.display="none"
        }
        else{
            item.style.display="block"
        }
    })
}
