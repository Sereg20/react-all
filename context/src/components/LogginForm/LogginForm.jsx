import React, { useContext } from "react";
import ReactDOM from "react-dom";
import cl from './LogginForm.module.css';
import LogginInput from "../UI/LogginInput/LogginInput";
import LogginButton from "../UI/LogginButton/LogginButton";
import AuthContext from "../../store/auth-context";
import useInputForm from "../../hooks/use-input";


const LogginForm = ({isOpened, closeLoginForm}) => {
    const _validateName = name => name.length >= 3;
    const _validatePassword = password => password.length >= 8;
    
    const {
        value: name, 
        isValueValid: isNameValid, 
        inputChange: onNameChange
    } = useInputForm(_validateName);
    const {
        value: password, 
        isValueValid: isPasswordValid, 
        inputChange: onPassChange
    } = useInputForm(_validatePassword);

    const isFormValid = isNameValid && isPasswordValid;

    const ctx = useContext(AuthContext);

    const onLogginBtnClick = (e) => {
        e.preventDefault();
        ctx.login();

        closeLoginForm();
    };

    const onLoginFormClick = () => {
        closeLoginForm();
    };

    const classes = [cl.content];

    if (isOpened === 'entering') {
        classes.push(cl.opened);
    } else if (isOpened === 'exiting') {
        classes.push(cl.closed);
    }

    return (
        <>
            { ReactDOM.createPortal(
                <div className={cl.wrapper} onClick={onLoginFormClick}>
                    <div className={classes.join(' ')} onClick={(e) => {e.stopPropagation()}}>
                        <h2 className={cl.title}>Sign In</h2>
                        <form className={cl.form}>
                            <label htmlFor="name" className={cl.label}>Name</label>
                            <LogginInput id='name' value={name} onChange={onNameChange}/>
                            <label htmlFor="pass" className={cl.label}>Password</label>
                            <LogginInput id='pass' value={password} onChange={onPassChange}/>
                            <div className={cl.actions}>
                                <LogginButton disabled={!isFormValid} onClick={onLogginBtnClick}>Submit</LogginButton>
                            </div>
                        </form>
                    </div>
                </div>, document.getElementById('modals')
            )}
        </>
        
    );
};

export default LogginForm;