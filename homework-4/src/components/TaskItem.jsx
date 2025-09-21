import React, { memo } from "react";

const TaskItem = memo(({ task, toggleTask, deleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
        </span>
      </div>
      <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task.id)}>
        Удалить
      </button>
    </li>
  );
});

export default TaskItem;
