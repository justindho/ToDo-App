// When DOM loads, focus on input field
document.addEventListener("DOMContentLoaded", focus);

function addItem(){

    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("input-field");

    // Don't add item if input field is blank
    if (candidate.value != "") {
        var li = document.createElement("li");
        li.setAttribute('id',candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        ul.appendChild(li);
    }

    // Clear input field after adding item
    candidate.value = "";

    // Re-focus on input field
    document.getElementById("input-field").focus();
}

function focus() {
    
    // Put focus on input field
    document.getElementById("input-field").focus();
}

function inputKeyPress(e) {
    e=e || window.event;
    var key = e.keyCode;
    if (key == 13) {
        addItem();
    }

}