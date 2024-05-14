import React from 'react';
import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = e => {
    e.preventDefault();
    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/')
        })
        .catch(error => alert(error.message))
  }
  
  const Register = e => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log('auth:', auth)
            if (auth) {
                navigate('/')
            }
        })
        .catch (error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to='/'>
            <img 
                className='login_logo'
                src='https://logosmarcas.net/wp-content/uploads/2020/04/Amazon-Logo.png' 
                alt='logo'
            />
        </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button className='login_signInButton' onClick={SignIn}>Sign in</button>

                <p>By sign-in, you agree to Amazon fake clone Conditions of Use. Please read our Privacy Notice.</p>
                
                <button className='login_registerButton' onClick={Register}>Create your Amazon account</button>
            </form>
        </div>
    </div>
  )
}

export default Login