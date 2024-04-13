import './mainpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHome, faUser, faCog, faSignOutAlt, faSignOut } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return ( 
            <div className='bar'>
                <div></div>
                <ul>
                    <li>
                        <a href="./">
                            <FontAwesomeIcon icon={faHome} />
                        </a>
                    </li>
                    <li>
                        <a href="#profile">
                            <FontAwesomeIcon icon={faUser} />
                            
                        </a>
                    </li>
                    <li>
                        <a href="#home">
                            <FontAwesomeIcon icon={faCog} />
                            
                        </a>
                    </li>
                    <li>
                        <a href="#Post">
                            <FontAwesomeIcon icon={faComment} />
                        </a>
                    </li>
                </ul>
            </div>
            
     );
}
 
export default Navbar;