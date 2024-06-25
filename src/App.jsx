import React, { useState } from 'react';
import TaskList from './assets/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

    const addTask = () => {
        if (newTaskText.trim() !== '') {
            const newTask = {
                id: tasks.length + 1,
                text: newTaskText,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setNewTaskText('');
        }
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const toggleTask = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };
return (
        <div className="App">
            <h1>Task Manager</h1>
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
