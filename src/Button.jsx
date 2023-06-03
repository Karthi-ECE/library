import App from "./App.css"
import UserHome from "./UserHome"
import { Link } from "react-router-dom"
export default function Button()
{
    return(
        <div id="l">
            <div id="body">
            <div className="intro_button">
                <div id="heading">
                WELCOME TO <p>DEVREV </p>LIBRARY MANAGEMENT SYSTEM
                </div>
                <br></br>
                <br></br>
               <br></br>
                <nav> 
                    <Link to={`userhome`}>
                    <a >
                    <span>Click me <br></br>
                    </span>
                </a>
                </Link>
                </nav>
                    
                    
                
               
        </div>
            </div>
        </div>
        
    )
}