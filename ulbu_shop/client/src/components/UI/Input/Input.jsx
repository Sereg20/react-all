import cl from './Input.module.css';

const Input = (props) => {

    return (
        <input {...props} className={cl.input}/>
    );
};

export default Input;