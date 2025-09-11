import { useState, useEffect } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  
  const addTask = (e) => {
    if (e && e.preventDefault) e.preventDefault(); 
    const text = inputValue.trim();
    
    setTasks((prev) => {
      
      const next = [...prev, text];
    
      return next;  

    });
    setInputValue("");
  };

  useEffect(() => {
    if (tasks.length > 10) {
      alert("У вас более 10 задач для выполнения");
    }
  }, [tasks]);


  const removeTask = (indexToRemove) => {
    setTasks((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">ToDo List</h2>

    
      <form className="input-group mb-3" onSubmit={addTask}>
        <input
          type="text"
          className="form-control"
          placeholder="Введите задачу..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        <button type="submit" className="btn btn-primary">
          Добавить задачу
        </button>
      </form>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task}
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={() => removeTask(index)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
