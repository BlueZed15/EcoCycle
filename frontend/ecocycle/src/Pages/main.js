import logo from './logo.jpeg.jpg'
import './mainpage.css'
const Main = () => {
    return ( 
        <div className="main">
            <div className="sidebar">
                <div className="img">
                <img src={logo} />
                </div>
                <div className = "topic">
                    <h3>Topic 1</h3>
                    <button>Subtopic</button>
                    <button>Subtopic</button>
                    <button>Subtopic</button>
                    <button>Subtopic</button>
                </div>
                
                <div className = "topic">
                    <h3>Topic 2</h3>
                    <button>Subtopic</button>
                    <button>Subtopic</button>
                    <button>Subtopic</button>
                    <button>Subtopic</button>
                </div>

                
                <div className = "topic">
                    <h3>Topic 3</h3>
                    <button>Subtopic</button>
                    <button>Subtopic</button>
                    <button>Subtopic</button>
                    <button>Subtopic</button>
                </div>
            </div>
            <div className="content">
                <h1>Dashboard</h1>
                <div className='grid'>
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