import React from "react";
import cl from './TasksList.module.css';
import Task from "../Task/Task";

const TasksList = ({items, deleteTask}) => {


    return (
        <div className={cl.list}>
            {items.map(task => <Task key={task.id} data={task}/>)}
        </div>
    );
};

export default TasksList;
