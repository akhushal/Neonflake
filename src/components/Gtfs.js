import React from "react";
import './style.css';
import './globals.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div>
            <ul className="navbar">
          <li>
            <a href="#"><Link to='/stories' >Stories</Link></a>
          </li>
          <li>
            <a href="#"><Link to='/voices'>Voices</Link></a>
          </li>
        </ul>
            </div>
            
                        
            <div className="main">
                <div className="bg-white py-4 px-4 rounded-md c">
                    <div>
                        <label className="addnewstory gtfssn">Generated Text for Story - Story Name</label>
                    </div>
                    <div className="x">
                        <div className="y">
                            English
                        </div>
                        <div className="z">
                        The magic of components lies in their reusability: you can create components that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into different files. 
                        </div>
                        <div className="y">
                            Hindi
                        </div>
                        <div className="z">
                        The magic of components lies in their reusability: you can create components that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into different files. 
                        </div>
                    </div>
                    
                    <div className="my-6 flex flex-col gap-4">
                        <button class="toggle-code save gvs">
                        <Link to='/gvsfsn' className="ansl" >Generate Voice Stories</Link> 
                        </button>
                        <button class="toggle-code cancel gvs">
                        <Link to='/gvfssn' className="ansl" >Generate Video Stories</Link>
                        </button>
                        <div className="nice-form-group" id="output">
                            <label>User</label>
                        </div>


                    </div>
                </div>
            </div>
            
        </>
    );
};
export default Navbar;
