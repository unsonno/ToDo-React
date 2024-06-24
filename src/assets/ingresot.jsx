import { mostrarTareas } from "./contenedor";
import { getData, postData, deleteData, putData } from "./fetch";

let crearTarea = async (e) => {
    const inputtxt = document.getElementById("inputtxt");
    if (inputtxt.value.trim("") !== ""){
        let nuevaTarea = {
            titulo: inputtxt.value,
            estado: false
        }
        inputtxt.value = "";
        let tareas = await postData (nuevaTarea);
        mostrarTareas(tareas);
    } else {
        inputtxt.value = "";
        alert ("Ingresa tu tarea");
    }
}