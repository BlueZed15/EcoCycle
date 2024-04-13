import './loginPage.css'
import sweep from './sweeping.jpeg.jpg'
import logo from './logo.jpeg.jpg'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { database } from '../firebase';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const gosignup=()=>{
        navigate('/signup')
    }
    
    const gomain=()=>{
        navigate('/main')
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const usersRef = database.ref('users');
        const query = usersRef.orderByChild('email').equalTo(email);
        
        try {
            const snapshot = await query.once('value');
            let userFound = false;

            snapshot.forEach((userSnapshot) => {
                const userData = userSnapshot.val();
                if (userData.password === password) {
                    userFound = true;
                    return;
                }
            });

            if (userFound) {
                navigate('/main');
            } else {
                setError('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred during login. Please try again later.');
        }
    }

    return ( 
        <div className="main">
            <div className="left">
                <img className = "loginImg" src = {sweep} />
            </div>

            <div className="right">
                <div className="container">
                    <img className="logo" src = {logo} />
                    
                    <form className="form" autoComplete="off" >
                        <h2>Welcome back!</h2>
                        <div className="form_grp">
                            <label className="form_label">Email</label>
                            <input type = "text" className="email" autoComplete="off" placeholder='Enter Email ID' onChange={(e)=> setEmail(e.target.value)}/>
                        </div>

                        <div className="form_grp">
                            <label className="form_label">Password</label>
                            <input type = "password" className="password" autoComplete="new-password" placeholder='Enter Password' onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className='form_grp'>
                            <button type = "submit" className = "Login">Login</button>
                        </div>
                        <button onClick={gosignup} className="account">Don't have an account ? Click Here</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;