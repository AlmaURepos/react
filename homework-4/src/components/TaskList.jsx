import React, { memo } from "react";
import TaskItem from "./TaskItem";

const TaskList = memo(({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
});

export default TaskList;
