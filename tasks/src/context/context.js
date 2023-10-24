import React from "react"

const TaskContext = React.createContext({
    deleteTask: (id) => {}
});

export default TaskContext;