import cl from './Button.module.css';

const Button = ({children, mode, ...props}) => {

    const classes = [cl.button];

    if (mode === 'light') {
        classes.push(cl.light);
    }

    return (
        <button {...props} className={classes.join(' ')}>{children}</button>
    );
};

export default Button;