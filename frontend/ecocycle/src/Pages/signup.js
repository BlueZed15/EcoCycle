import React from 'react'
import './loginPage.css'
import sweep from './sweeping.jpeg.jpg'
import logo from './logo.jpeg.jpg'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate('/')
    }
    return ( 
        <div className="main">
            <div className="left">
                <img className = "loginImg" src = {sweep} />
            </div>

            <div className="right">
                <div className="container">
                    <img className="logo" src = {logo} />
                    
                    <form className="form" autoComplete="off">
                        <h2>See Whats New!</h2>
                        <div className="form_grp">
                            <label className="form_label">Name</label>
                            <input type = "text" className="name" autoComplete="off" placeholder='Enter Name'/>
                        </div>
                        <div className="form_grp">
                            <label className="form_label">Email</label>
                            <input type = "text" className="email" autoComplete="off" placeholder='Enter Email ID'/>
                        </div>

                        <div className="form_grp">
                            <label className="form_label">Password</label>
                            <input type = "password" className="password" autoComplete="new-password" placeholder='Create Password'/>
                        </div>
                        <div className='form_grp'>
                            <button type = "submit" className = "Login">Sign Up</button>
                        </div>
                        <button onClick={login} className="account">Already have an account ? Click Here</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;