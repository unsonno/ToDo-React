import React from 'react';
import Task from './Task';
import {postData} from "./postData";
import { deleteData } from "./deleteData";
let onDelete = deleteData
let postData = task
///visualizador de tareas, lista de tareas/ si no contiene al menos una tarea aparece mensaje////
const TaskList = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className="task-list">
            {tasks.length === 0 && <p> There are no tasks for now </p>}
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
                //
            ))}
        </div>
    );
};

export default TaskList;
