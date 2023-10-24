import { redirect } from "react-router-dom";
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {

  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({request}) => {
  const mode = new URL(request.url).searchParams.get('mode');
  const data = await request.formData();
  const creds = {
    email: data.get('email'),
    password: data.get('password')
  };

  const response = await fetch('http://localhost:8000/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creds)
  });

  if (response.status === 401) {
    return response;
  }

  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem('token', token);

  return redirect('/');
};