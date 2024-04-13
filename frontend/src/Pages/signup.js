import React, {useState} from 'react'
import './loginPage.css'
import sweep from './sweeping.jpeg.jpg'
import logo from './logo.jpg'
import {auth, database} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { set, ref } from 'firebase/database'

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUser] = useState('');
    const[compname, setCompname] = useState('');
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login = () => {
        navigate('/')
    }

    const Register = async (e) => {
        e.preventDefault();

        try{
            const credentials = await createUserWithEmailAndPassword(auth,email,password);
            set(ref(database, 'UserProfile/' + credentials.user.uid),{
                UserName: username,
                CompName: compname,
            }).then(()=>{
                navigate('./');
            }).catch((error)=>{
                alert("Unsuccessful");
                console.log(error);
            })
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
                <div className="signup">
                    <div className='header'>
                        <img className="logo" src = {logo} />
                        <h1>SEE WHATS NEW!</h1>
                    </div>
                    
                    <form className="form" autoComplete="off" onSubmit={Register}>
                        
                        <div className="form_grp">
                            <label className="form_label">UserName</label>
                            <input type = "text" className="name" autoComplete="off" placeholder='Create UserName' onChange={(e)=> setUser(e.target.value)} />
                        </div>
                        <div className="form_grp">
                            <label className="form_label">Company Name</label>
                            <input type = "text" className="name" autoComplete="off" placeholder='Enter Company Name' onChange={(e)=> setCompname(e.target.value)}/>
                        </div>
                        <div className="form_grp">
                            <label className="form_label">Email</label>
                            <input type = "email" className="email" autoComplete="off" placeholder='Enter Email ID' onChange={(e)=> setEmail(e.target.value)}/>
                        </div>

                        <div className="form_grp">
                            <label className="form_label">Password</label>
                            <input type = "password" className="password" autoComplete="new-password" placeholder='Create Password' onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div className='form_grp'>
                            <button type = "submit" className = "Login">Sign Up</button>
                        </div>
                        <button onClick={login} className="account">Already have an account ?<p>..Click Here</p></button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;