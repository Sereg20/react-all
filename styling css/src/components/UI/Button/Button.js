import React from 'react';

import cl from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={cl.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};


export default Button;
