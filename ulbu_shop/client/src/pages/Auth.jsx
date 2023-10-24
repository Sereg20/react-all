import {useSelector} from 'react-redux';
import { json, redirect } from 'react-router-dom';
import Signin from '../components/signin/Signin';
import { setToken } from '../util/manage-token';

const Auth = () => {
    return (
        <Signin title='Sign In'/>
    );
};

export default Auth;

export const action = async ({request}) => {
    const data = await request.formData();
    const payload = {
        email: data.get('email'),
        password: data.get('password')
    };

    try {
        const response  = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = await response.json();
        setToken(responseData.token);

        return redirect('/');
    } catch (e) {

    }
};
