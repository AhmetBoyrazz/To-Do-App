const input = document.querySelector("input");
const buttons = document.querySelector("button");
const delete_button = document.querySelectorAll(".bodyy")[0];
const ul = document.querySelector("ul");
const body = document.querySelector("body");

const addTodo = (e) => {
  const newTodo = input.value.trim();
  if (newTodo === "") {
    console.log("unsuccessful");
  } else if (e.key === "Enter" || e.key === undefined) {
    console.log("Successful");
  }
};

const addTodoUI = (newTodo) => {
    const listItem = document.createElement("li");
    const pa = document.createElement("p");
    pa.className = "hover:scale-125 cursor-pointer";
    pa.innerHTML = '<i id="a" class="fa-sharp fa-solid fa-trash p-2 "></i>'
    listItem.className = "border flex items-center w-full px-[1rem] min-h-[3rem] rounded-lg shadow-lg"
    listItem.appendChild(document)
};
buttons.addEventListener("click", addTodo);