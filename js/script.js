// When DOM loads, focus on input field
document.addEventListener("DOMContentLoaded", focus);

function addTask(){

    var tasklist = document.getElementById("tasklist");
    var candidate = document.getElementById("input-field");

    // Don't add item if input field is blank
    if (candidate.value != '') {

        // Create a new div
        var task = document.createElement('div');
        task.className = 'task row';
        task.setAttribute('id', candidate.value);
        
        // Create a new checkbox
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'checkbox col-md-1';
        task.append(cb);

        // Create a new paragraph
        const p = document.createElement('p');
        p.className = 'col-md-9';
        p.setAttribute('id', 'p' + candidate.value);
        p.appendChild(document.createTextNode(candidate.value));
        task.append(p);

        // Create a delete button
        const button = document.createElement('button');
        button.className = 'fas fa-trash-alt col-md-2';
        // button.className = 'trash col-md-2';
        // button.innerHTML = 'delete';
        button.setAttribute('id', candidate.value + 'trash');
        task.append(button);

        // When checkbox is clicked, change task to 'completed' status
        cb.onclick = function(){
            
        //     // Strikethrough text
        //     $(this).parent().wrap('<s>');
        //     // $(this).parent().children('p').css('color', 'red');
            $(this).parent().children('p').toggleClass('striked completed');
        };

        // $('cb').change(function(){
        //     if ($('cb').prop('checked')){
        //         $(this).parent().wrap('<s>');
        //     };
        // });

        
        
        // When button is clicked, remove task.
        button.onclick = function(){
            this.parentElement.remove();
        };
    
        // Add task to DOM.
        document.querySelector('#tasklist').append(task);
    }   

    // Clear input field after adding item
    candidate.value = "";

    // Re-focus on input field
    document.getElementById("input-field").focus();
}

function addFilterBar(){

    // Create filter bar
    const filterBar = document.createElement('div');
    filterBar.className = 'filterbar';
    // filterBar.innerHTML = // '# tasks' + ' left';

    // Create filters
    const allButton = document.createElement('button');
    allButton.innerHTML = 'All';
    const activeButton = document.createElement('button');
    activeButton.innerHTML = 'Active';
    const completedButton = document.createElement('button');
    completedButton = 'Completed';

    // When 'All' button is clicked, show all tasks
    allButton.onclick = function(e) {
        var x;
        x = document.getElementsByClassName('task');

    }

    // When 'Active' button is clicked, show remaining tasks


    // When 'Completed' button is clicked, show completed tasks

}

function focus() {

    // Put focus on input field
    document.getElementById("input-field").focus();
}

function inputKeyPress(e){
    e=e || window.event;
    var key = e.keyCode;
    if (key == 13) { // ENTER key has id = 13
        addTask();
    }
}

function removeTask(){

    var parentDiv = document.getElementById('tasklist');
    var candidate = document.getElementById('candidate');
    var task = document.getElementById(candidate.value);

    parentDiv.removeChild(task);
}

$(document).ready(function(){
    $('.checkbox').click(function(){
        $(this.parent().children('p').toggleClass('striked'));
    });
});