import React, {useState} from "react";
import cl from './NewTask.module.css';

import CreateBtn from "../UI/CreateBtn/CreateBtn";

const NewTask = ({createTask}) => {

    const [task, setTask] = useState('');

    function submitTask(e) {
        e.preventDefault();
        createTask(task);

        setTask('');
    }

    function onInputChange(e) {
        setTask(e.target.value);
    }

    return (
        <form className={cl.form}>
            <input type="text" value={task} onChange={onInputChange}/>
            <CreateBtn onClick={submitTask}>Submit</CreateBtn>
        </form>
    );
};

export default NewTask;