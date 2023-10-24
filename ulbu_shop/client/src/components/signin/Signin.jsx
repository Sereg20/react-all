import { useState } from 'react';
import { Form, useSubmit, useNavigate} from 'react-router-dom';

import cl from './Signin.module.css'
import Input from "../UI/Input/Input";
import Button from '../UI/button/Button';
import {useLocation} from 'react-router-dom'

const Signin = ({title}) => {
    const submit = useSubmit();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const mode = useLocation().pathname === '/auth' ? 'signin' : 'signup';
    const switchModeText = mode === 'signin' ? 'Dont have a user?' : 'Have a user?';

    const onSwitchModeClick = () => {
        if (mode === 'signin') {
            navigate('/registration');
        } else {
            navigate('/auth');
        }
        resetFields();
    };

    const resetFields = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <Form method="POST" className={cl.form}>
            <span className={cl.title}>{title}</span>
            <label htmlFor="">Email</label>
            <Input name="email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <Input name="password" type="text" value={password} onChange={e => setPassword(e.target.value)}/>
            <div className={cl.actions}>
                <Button>{title}</Button>
                <span className={cl['switch-mode']} onClick={onSwitchModeClick}>{switchModeText}</span>
            </div>
        </Form>
    );
};

export default Signin;