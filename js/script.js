document.addEventListener('DOMContentLoaded', () => {

    // Variables for HTML elements
    let tasklist = document.querySelector('#tasklist');
    let form = document.querySelector('form');
    let task = document.querySelector('#task');
    
    /**
     * When the 'add task' button is clicked, add the new task to 
     * local storage.
     */
    form.addEventListener('submit', (event) => {
        // Prevent form submissions.
        event.preventDefault();
        
        // Store new task in storage and reset 'new task' input field.
        tasklist.innerHTML += '<li>' + task.value + '</li>';
        store();
        task.value = '';
    });

    /**
     * Get task that was clicked on. If it was already marked as complete,
     * remove the task. Else, add a check to the task to mark it as complete.
     * Update local storage.
     */
    tasklist.addEventListener('click', (event) => {           
        let t = event.target;
        if (t.classList.contains('checked')) {
            t.parentNode.removeChild(t);
        } else {
            t.classList.add('checked');
        }
        store();
    });

    /**
     * Update local storage with the updated task list's HTML.
     */
    function store() {        
        localStorage.setItem('myTasks', tasklist.innerHTML);
    };

    /**
     * Update UI with user's task list.
     */
    function getValues() {        
        let storedValues = localStorage.getItem('myTasks');

        // Create tasklist if it doesn't already exist. Else update UI.        
        if (!storedValues) {
            tasklist.innerHTML = '';
        } else {
            tasklist.innerHTML = storedValues;
        }
    };
    
    getValues();

});