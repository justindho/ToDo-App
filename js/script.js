function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");

    // Don't add item if input field is blank
    if (candidate.value != "") {
        var li = document.createElement("li");
        li.setAttribute('id',candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        ul.appendChild(li);
    }

    // Clear input field after adding item
    candidate.value = "";
}