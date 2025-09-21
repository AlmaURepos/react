import React, { useState, useRef, useCallback, useEffect } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(() => {
    const value = inputRef.current.value.trim();
    if (value) {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), text: value, completed: false },
      ]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Todo List</h2>
      <div className="input-group mb-3">
        <input type="text" ref={inputRef} className="form-control" />
        <button className="btn btn-primary" onClick={addTask}>
          Добавить задачу
        </button>
      </div>

      <div className="mb-3">
        <button
          className={`btn btn-sm me-2 ${
            filter === "all" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button
          className={`btn btn-sm me-2 ${
            filter === "active" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setFilter("active")}
        >
          Активные
        </button>
        <button
          className={`btn btn-sm ${
            filter === "completed" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setFilter("completed")}
        >
          Выполненные
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

      <div className="mt-3">
        <span className="me-3">Всего задач: {total}</span>
        <span>Выполнено: {done}</span>
      </div>
    </div>
  );
}

export default App;
