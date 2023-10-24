import React, {  } from "react";
import useInput from "../../hooks/use-input";

const Form = () => {
    const {
        value: name,
        isValueValid: isNameValid,
        isError: isNameError,
        inputChangeHandler: inputNameChangeHandler,
        inputBlurHandler: inputNameBlurHandler,
        reset: resetName
    } = useInput(name => name !== '');
    const {
        value: email,
        isValueValid: isEmailValid,
        isError: isEmailError,
        inputChangeHandler: inputEmailChangeHandler,
        inputBlurHandler: inputEmailBlurHandler,
        reset: resetEmail
    } = useInput(email => email.includes('@'));

    const formIsValid = isNameValid && isEmailValid;

    const submitFormHandler = (e) => {
        e.preventDefault();

        if (!isNameValid || !isEmailValid) {
            return;
        }

        resetName();
        resetEmail();

        console.log(name + email);
    };

    const btnClassNames = formIsValid ? 'btn' : 'btn disabled';

    return (
        <form onSubmit={submitFormHandler} className='form'>
            <div className="form-item">
                <label htmlFor="name">User Name</label>
                <input 
                    className={isNameError ? 'invalid' : null}
                    type="text" 
                    id='name' 
                    value={name} 
                    onChange={inputNameChangeHandler}
                    onBlur={inputNameBlurHandler}/>
                <div>
                    { isNameError && <p className="error-msg">Name must not be empty</p> }
                </div>
            </div>

            <div className="form-item">
                <label htmlFor="email">User Email</label>
                <input 
                    className={isEmailError ? 'invalid' : null}
                    type="text" 
                    id='email' 
                    value={email} 
                    onChange={inputEmailChangeHandler}
                    onBlur={inputEmailBlurHandler}/>
                <div>
                    { isEmailError && <p className="error-msg">Email must contain @</p> }
                </div>
            </div>
            <div className="actions">
                <button disabled={!formIsValid} className={btnClassNames}>Submit</button>
            </div>
        </form>
    );
};

export default Form;