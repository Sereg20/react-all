import React from "react";
import TaskContext from "./context";

const TaskContextProvider = ({deleteTask, children}) => {

    function deleteSelectedTask(id) {
        deleteTask(id);
    }

    const context = {
        deleteTask: deleteSelectedTask
    };

    return (
        <TaskContext.Provider value={context}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;