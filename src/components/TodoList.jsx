import { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    //ajouter une tâche

    const addTask = () => {
        if(newTask.trim() === "") return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    };

    //Masquer comme terminé

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };


    //Supprimer une tâche

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>Liste de tâches</h2>
            <input type="text"
             value={newTask} 
             onChange={(e) => setNewTask(e.target.value)}
             placeholder="Ajouter une tâche..."
             />
             <button onClick={addTask}>Ajouter</button>

             <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{textDecoration: task.completed ? "line-through": "none"}}>
                        {task.text}
                        <button onClick={() => toggleTask(index)}>✔</button>
                        <button onClick={() => deleteTask(index)}>❌</button>


                    </li>
                ))}
             </ul>
        </div>
    );
       
};

export default TodoList;