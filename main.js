const inputTareas = document.getElementById("nueva-tarea");
const btnNuevaTarea = document.getElementById("btn-nueva-tarea");
const containerTasks = document.getElementById("container-tasks");

let r = 30;
let g = 134;
let b = 251;

function agregarTarea({ texto }) {
  if (inputTareas.value === "") {
    return 0;
  }
  inputTareas.value = "";

  let nuevaTarea = document.createElement("div");
  nuevaTarea.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  nuevaTarea.innerHTML = `<p class="task__text">${texto}</p><button class="btn-delete-task"><img class="btn-delete-svg" src="svg/trash.svg"></button>`;
  nuevaTarea.classList = "task";

  r = 0;
  g -= 19;
  b -= 17;

  containerTasks.append(nuevaTarea);
  nuevaTarea.addEventListener("click", () => {
    let textoTarea = nuevaTarea.firstChild;

    textoTarea.classList.toggle("line-through");
  });
}

btnNuevaTarea.addEventListener("click", () => {
  agregarTarea({ texto: inputTareas.value });

  const btnDeleteTask = document.querySelectorAll(".btn-delete-task");

  btnDeleteTask.forEach((btn) => {
    btn.addEventListener("click", () => {
      let elementoPadre = btn.parentElement;

      elementoPadre.remove();
    });
  });
});
