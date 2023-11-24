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
                        <label className="addnewstory">New Translation</label>
                    </div>
                    <div className="nice-form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            id="filename"
                        // onChange={handleInputChange}
                        />

                    </div>
                    <div class="nice-form-group">
                        <label>Text</label>
                        <textarea rows="9" ></textarea>
                    </div>
                    <div className="nice-form-group">
                        <label>Select Language</label>
                        <select>
                            <option>Select</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Tamil</option>
                            <option>Japanese</option>
                        </select>
                    </div>
                    <div className="my-6 flex flex-col gap-4">
                        <button class="toggle-code save">
                            <Link to='/gtfs' className="ansl" >Submit</Link>
                        </button>
                        


                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;
