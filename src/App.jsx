import React, { useState } from 'react';
import TaskList from './assets/TaskList';
import { deleteData} from "./assets/deleteData";
import {getData} from "./assets/getData";
import { postData } from "./assets/postData";

let {deleteData} = deleteTask 
let {getData} = addTask
let {putData} = updatedTasks
let {postData} = newTask



function App() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');
    //creacion de nueva tarea si el espacio es distinto a vacio//
    const addTask = () => {
        if (newTaskText.trim() !== '') {
            const newTask = {
                id: tasks.length + 1,
                text: newTaskText,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setNewTaskText('');
        }else{
            alert ('first write something')
        }
    };
///actualizar tarea al utilizar el evento de eliminar///
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };
////actualizar al marcar check//
    const toggleTask = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };
//enviar tarea al usar 'enter'//
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };
return (
        <div className="App">
            <h1>To Do's List</h1>
            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={addTask}>Add Task</button>
            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
        </div>
    );
}

export default App;
