import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const reduceEmail = (prevState, action) => {
  if (action.type === 'INPUT') {
    return {value: action.value, state: action.value.includes('@')};
  }
  if (action.type === 'BLUR') {
    return {value: prevState.value, state: prevState.value.includes('@')};
  }
};

const reducePassword = (prevState, action) => {
  if (action.type === 'INPUT') {
    return {value: action.value, state: action.value.trim().length > 6};
  }
  if (action.type === 'BLUR') {
    return {value: prevState.value, state: prevState.value.trim().length > 6}
  }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, setEmailState] = useReducer(reduceEmail, {
    value: '',
    state: null
  });
  const [passwordState, setPasswordState] = useReducer(reducePassword, {
    value: '',
    state: null
  });

  useEffect(() => {
    console.log('EXECUTED!')
    const timer = setTimeout(() => {
      setFormIsValid(
        emailState.value.includes('@') && passwordState.value.trim().length > 6
      );
    }, 400);
    return () => {
      console.log('CLEAR')
      clearTimeout(timer);
    }
  }, [emailState.state, passwordState.state]);

  const emailChangeHandler = (event) => {
    setEmailState({type: 'INPUT', value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    setPasswordState({type: 'INPUT', value: event.target.value});
  };

  const validateEmailHandler = () => {
    setEmailState({type: 'BLUR'});
  };

  const validatePasswordHandler = () => {
    setPasswordState({type: 'BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.state === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.state === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
