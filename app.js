const form = document.querySelector('#task-form');

const taskList = document.querySelector('.collection');

const clearBtn = document.querySelector('.clear-task');

const filter = document.querySelector('#filter');

const taskInput = document.querySelector('#task');

// load all event listiner 

loadEventListeners();

// load all event listiner

function loadEventListeners(){

    // Add task event
    form.addEventListener('submit',addTask);

    // Remove task event
    taskList.addEventListener('click',removeTask)

    // filter Task event
    filter.addEventListener('keyup',filterTask)
}

// Add task 

function addTask(e){
    if(task.value === ''){
        alert('Add a task');
    }
    // create li element
    const li = document.createElement('li');

    li.className = 'collection-item';

    // create text node and append to li 

    li.appendChild(document.createTextNode(task.value));

    // create new link element

    const link = document.createElement('a');

    // add the class
    link.className = 'delete-item secondary-content'

    // add icons
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = '';

    e.preventDefault();
}
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item'))
    if(confirm('Are You Sure ?')){
        e.target.parentElement.parentElement.remove();
    }
}
// Filter Task
function filterTask(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach( function (task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
    
}