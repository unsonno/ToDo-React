import { getData, postData, deleteData, putData  } from "./fetch";
export let mostrarTareas = (html, tareas = []) => {
    html.innerHTML = "";
    if (tareas.length !== 0) {
        tareas.forEach(tarea => {
            if (tarea !== "") {
                let p = document.createElement("p")
                p.innerHTML = tarea;
                html.appendChild(p);
            }
        });
        html.style.display = "block";
    } else {
        html.style.display = "none";
    }
    return
    <div className="tareas">
    {lista.map((task) => {
        
    }
    )};
        
    </div>
}


