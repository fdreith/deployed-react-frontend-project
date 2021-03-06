import React from "react";
import Task from "./Task.js";

const AssignedTasks = (props) => {
  return (
    <div className="assignedTasks">
      <h6>Assigned Tasks:</h6>
      <ul>
        {props.assignedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            history={props.history}
            toggleTaskInfo={props.toggleTaskInfo}
            handleComplete={props.handleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default AssignedTasks;
