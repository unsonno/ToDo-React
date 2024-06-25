import React from 'react';
import { FaTrashCan } from "react-icons/fa6";
import { deleteData } from "./deleteData";
// estructura base de una tarea y con lo que debe ir acompañada//
const Task = ({ task, deleteData, onToggle }) => {
    
    return (
        <div className="task">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteData(task.id)}><FaTrashCan /></button>
        </div>
    );
};

export default Task;