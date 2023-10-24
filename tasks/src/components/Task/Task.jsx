import React, { useContext } from "react";
import cl from './Task.module.css';
import TaskContext from "../../context/context";

const Task = ({data}) => {

    const ctx = useContext(TaskContext);
    
    function onTaskKlick() {
        ctx.deleteTask(data.id);
    }

    return (
        <div className={cl.item} onClick={onTaskKlick}>
            {data.title}
        </div>
    );
};

export default Task;
