console.log("Js Running ==>");

let inputText = document.getElementById("input");
let addbtn = document.querySelector(".add-btn");
let todolist = document.getElementsByTagName("ul")[0];
let delAllBtn = document.querySelector(".del-btn");
let delBtn = document.querySelector(".fa-trash-can");

addbtn.addEventListener("click", addhandler);
delAllBtn.addEventListener("click", delAllHandler);
delBtn.addEventListener("click", delHandler);

function addhandler() {
    if (inputText.Value.trim() == "") {
        sweetAlert("error", "sad", "Please Enter a Value")
    };

    todolist.innerHTML += `<li>
    ${inputText.value}
        <div class="icon">
            <i class="fa-solid fa-trash-can"></i>
            <i class="fa-solid fa-pen-to-square"></i>
        </div>
    </li>`

    inputText.value = "";
}

function sweetAlert(icon, title, message) {
    Swal.fire({
        icon: icon,
        title: title,
        text: message,
    });
};
