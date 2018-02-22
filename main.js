document.getElementById("add").addEventListener("click", newTodo);
document.getElementById("clear").addEventListener("click", deleteAllTodos);

todoItemList = [""];
cheerList = ["Good job!", "You´re awesome!", "Phenomenal!", "Woohoo!", "You did it!", "Yo´re done!"]

// Make it possible to press enter after input
var PressEnter = document.getElementById("todoInput");
PressEnter.addEventListener('keypress', function (e) {
    const enterKey = e.keyCode;
    if (enterKey === 13) {
        if (PressEnter.value === '') {
            alertMessage();
        } else {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById('add').click();
            }
        }
    }
})


function newTodo() {

    //defines the listelement, and the value from input-field
    var todoItem = document.createElement("li");
    var todoValue = document.getElementById("todoInput").value;
    var valueText = document.createTextNode(todoValue);

    //checks if the input value already exist in the todoItemList-array
    var ValueCheck = todoItemList.includes(todoValue);

    if (ValueCheck) {

        alert("That todo is already in the list");

    } else if (todoValue === "") {

        alert("U have to write a todo")

    } else {
        //adds all the todo-selements to the page
        document.getElementById("incomplete").appendChild(todoItem);
        addButtons(todoItem, todoValue);
        todoItem.appendChild(valueText);
        todoItemList.push(String(todoValue));
        document.getElementById("todoInput").value = "";
    }
}

//adds delete and done buttons to the todos
function addButtons(todoItem, todoValue) {

    //adding delete button
    var btnDelete = document.createElement("SPAN");
    btnDelete.className = 'delete';
    btnDelete.onclick = deleteTodo;
    var btnDeleteValue = document.createTextNode("\u2717");
    btnDelete.appendChild(btnDeleteValue);
    todoItem.appendChild(btnDelete);

    //adding done botton
    var btnDone = document.createElement("SPAN");
    btnDone.className = 'done';
    btnDone.onclick = completeTodo;
    var btnDoneValue = document.createTextNode("\u2713");
    btnDone.appendChild(btnDoneValue);
    todoItem.appendChild(btnDone);
}


function completeTodo() {

    //target the parent and removes it. in this case the "LI" element.
    var buttonParent = this.parentElement;
    var deleteTodo = document.getElementById("incomplete").appendChild(buttonParent);
    buttonParent.remove();
    
    //create a copy of the todo and put it in complete-list.
    var moveToComplete = document.createTextNode(buttonParent);
    document.getElementById("complete").appendChild(buttonParent);
    
    //removes the "done" button from the todo"
    var removeDonebutton = this;
    removeDonebutton.style.display = "none";
    
    fadeInCheer();
}


function deleteTodo() {

    //target the parent and removes it. in this case the "LI" element.
    var deleteParent = this.parentElement;
    deleteParent.remove();
    
    //getting the index from the todoItemList and removes it based on todovalue.
    var removeFromTodoListArray = this.parentElement.childNodes[2].wholeText;
    var todoIndex = todoItemList.indexOf(removeFromTodoListArray);

    todoItemList.splice(todoIndex, todoIndex);

}
    console.log(todoItemList)


function deleteAllTodos() {

    var allTodos = document.getElementsByTagName("LI");

    for (var i = 0; i < allTodos.length; i += 0) {
        allTodos[i].remove();

        todoItemList = [""];
    }
}


var happyWord = document.querySelector("#happyWords");


function fadeInCheer() {

    var x = Math.floor((Math.random() * 6) + 0);

    happyWord.innerHTML = cheerList[x];
    happyWord.style.opacity = 1;
    happyWord.style.fontSize = "5em";

    setTimeout(fadeOutCheer, 1000);
}


function fadeOutCheer() {

    happyWord.style.opacity = 0;

    setTimeout(resetFontSize, 1000);
}


function resetFontSize() {

    happyWord.style.fontSize = "3em";
}
