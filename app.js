console.log("Js Running ==>");

let inputText = document.getElementById("input");
let addbtn = document.querySelector(".add-btn");
let todolist = document.getElementsByTagName("ul")[0];
let delAllBtn = document.querySelector(".del-All-btn");
let delBtn = document.querySelector(".fa-trash-can");

addbtn.addEventListener("click", addhandler);
delAllBtn.addEventListener("click", delAllHandler);

// delBtn.addEventListener("click", delHandler);

function addhandler() {
    if (inputText.value.trim() == "") {
        sweetAlert("error", "sad", "Please Enter a Value");
        return;
    };

    todolist.innerHTML += `<li>
        ${inputText.value}
            <div class="icon">
                <i onclick="delHandler(event)" class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
        </li>`;

    inputText.value = "";
}

function delHandler(event){
    event.target.parentElement.parentElement.remove();
};

function delAllHandler(event) {
    console.log("main Chala ==>");
    let todoArr = todolist.children;
    // event.target.parentElement.parentElement.parentElement.remove();
};

function sweetAlert(icon, title, message) {
    Swal.fire({
        icon: icon,
        title: title,
        text: message,
    });
};
