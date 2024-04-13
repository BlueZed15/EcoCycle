
import './mainpage.css'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
    return ( 
        <div className='main'>
            <Navbar />
            <div className='dashboard'>
                <div className='header'>
                    <h1>HOME</h1>
                    <div className='search'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className='body'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
 
export default Main;