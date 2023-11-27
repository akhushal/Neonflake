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
                        <label className="addnewstory">Dubbing (Voice)</label>
                    </div>
                    <div className="nice-form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            id="filename"
                        // onChange={handleInputChange}
                        />
                        <div className="nice-form-group">
                            <label>Upload MP3 </label>
                            <input type="file" />
                        </div>
                        <div className="nice-form-group">
                            <label>Upload MP3 </label>
                            <select>
                            <option></option>
                            
                        </select>
                        </div>
                    </div>
                    
                    <div className="my-6 flex flex-col gap-4">
                        <button class="toggle-code save">
                            Submit
                        </button>
                        


                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;
