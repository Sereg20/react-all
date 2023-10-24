import { redirect } from 'react-router-dom';
import Signin from '../components/signin/Signin';


const Registration = () => {
    return (
        <Signin title='Sign Up'/>
    );
};

export default Registration;

export const action = async ({request}) => {
    const data = await request.formData()
    const payload = {
        email: data.get('email'),
        password: data.get('password')
    };

    const response  = await fetch('http://localhost:5000/api/user/registration', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseData = await response.json();
    const token = responseData.token;
    
    return redirect('/');
};
