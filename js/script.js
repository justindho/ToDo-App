document.addEventListener('DOMContentLoaded', () => {

    // Create a tasklist in local storage if not already created.
    // if (!localStorage.getItem('tasklist')) {
    //     localStorage.setItem('tasklist', () => {
    //         let ul = document.createElement('ul');
    //     });
    // }

    // Variables for HTML elements
    let tasklist = document.querySelector('#tasklist');
    let form = document.querySelector('form');
    let task = document.querySelector('#task');

    // By default, the 'add' button for a new task is disabled.
    document.querySelector('#addbutton').disabled = true;

    // Enable button only if the input field is not empty.
    document.querySelector('#inputfield').onkeyup = () => {
        if (document.querySelector('#inputfield').value.length > 0) {
            document.querySelector('#addbutton').disabled = false;
        } else {
            document.querySelector('#addbutton').disabled = true;
        }
    }

    // Listen for 'add task' button clicks.
    form.addEventListener('submit', (event) => {

        // Prevent form submissions.
        event.preventDefault();
        
        // Store new task in storage and reset 'new task' input field.
        tasklist.innerHTML = '<li>' + task.value + '</li>';
        store();
        task.value = '';
    });

    // 
    tasklist.addEventListener('click', (event) => {
        // Get task that was clicked on. If it's marked as complete, 
        // save that info to local storage.
        let t = event.target;
        if (t.classList.contains('checked')) {
            t.parentNode.removeChild(t);
        }
    });

    function store() {
        window.localStorage.myTasks = tasklist.innerHTML;
    };

    // Add new task to tasklist.
    document.addEventListener('DOMContentLoaded', () => {
        
        document.querySelector('#new-task').onsubmit = () => {

            // Create a new task for the tasklist.
            const li = document.createElement('li');
            li.innerHTML = document.querySelector('#inputfield').value;

            // Add new task to tasklist.
            document.querySelector('#tasklist').append(li);

            // Clear input field.
            document.querySelector('#inputfield').value = '';

            // Stop form from resubmitting.
            // return false;
        };
    });

});