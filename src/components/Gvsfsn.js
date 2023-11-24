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
                        <label className="addnewstory gtfssn">Generated Voice for Story - Story Name</label>
                    </div>
                    <div className="x">
                        <div className="y">
                            English
                        </div>
                        <div className="z">
                        <button class="toggle-code save">
                            Play
                        </button>
                        </div>
                        <div className="y">
                            Hindi
                        </div>
                        <div className="z">
                        <button class="toggle-code save">
                            Play
                        </button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </>
    );
};
export default Navbar;
