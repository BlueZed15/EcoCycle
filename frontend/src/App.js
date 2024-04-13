import React from 'react'
import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom'
import Login from './Pages/login'
import './App.css';
import SignUp from './Pages/signup';
import Main from './Pages/MainPage/main';
function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Login />} />
        <Route path = '/signup' element = {<SignUp />} />
        <Route path = '/main' element = {<Main />} />
      </Routes> 
    </Router>
  );
}

export default App;
