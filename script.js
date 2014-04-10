window.onload = function () {
    create = document.getElementById("submit");
    create.onmousedown = createList;
};

function createList() {
    var task = document.getElementById("task");
    var listing = document.createElement("listing");
    var textInput = document.getElementById("todo");
    text = textInput.value;
    listing.innerHTML = text;
    task.appendChild(listing);

    listing.onmousedown = function () {
        this.parentNode.removeChild(this);
    };
}
