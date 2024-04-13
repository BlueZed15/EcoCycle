import './loginPage.css'
import sweep from './sweeping.jpeg.jpg'
import logo from './logo.jpg'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import {dbref, auth, database} from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { get } from 'firebase/database';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const gosignup=()=>{
        navigate('/signup')
    }
    

    const LoginIn = async (e) => {
        e.preventDefault();

        try{
            const credentials = await signInWithEmailAndPassword(auth,email,password);
            navigate('./main')
        }catch(error){
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        }
    }

    return ( 
        <div className="main">
            <div className="left">
                <img className = "loginImg" src = {sweep} />
            </div>

            <div className="right">
                <div className="container">
                    <div className='header'>
                        <img className="logo" src = {logo} />
                        <h1>WELCOME BACK!</h1>
                    </div>
                    
                    
                    <form className="form" autoComplete="off" onSubmit={LoginIn}>
                        
                        <div className="form_grp">
                            <label className="form_label">Email</label>
                            <input type = "email" className="email" autoComplete="off" placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)}/>
                        </div>

                        <div className="form_grp">
                            <label className="form_label">Password</label>
                            <input type = "password" className="password" autoComplete="new-password" placeholder='*********' onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div className='form_grp_button'>
                            <button type = "submit" className = "Login">Sign in</button>
                        </div>
                        
                        <button onClick={gosignup} className="account">Don't have an account ?<p>..Click Here</p></button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;