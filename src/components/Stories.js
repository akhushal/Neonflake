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
            <button class="toggle-code ans">
            <Link to='/adn' className="ansl" >Add New Stories</Link>
            </button>
            <button class="toggle-code ans">
            <Link to='/newtranslation' className="ansl" >New Translation</Link>
            </button>
            <button class="toggle-code ans dtvb">
            <Link to='/dubbingtpv' className="ansl" >Dubbing (Text + Voice)</Link>
            </button>
            <button class="toggle-code ans">
            <Link to='/dubbing' className="ansl" >Dubbing (Voice)</Link>
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="main">
                <div className="bg-white py-4 px-4 rounded-md c d">
                    <table id="customers">
                        <tr>
                            <th>Created On</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Nov 13 2023 10:10 a.m</td>
                            <td>Maria Anders</td>
                            <td>Voice</td>
                            <td>Processing</td>
                            <td><h>Edit</h>|<h>View</h>|<h>Delete</h></td>
                        </tr>
                        <tr>
                            <td>Nov 12 2023 10:10 a.m</td>
                            <td>Francisco Chang</td>
                            <td>Voice</td>
                            <td>Completed</td>
                            <td><h>Edit</h>|<h>View</h>|<h>Delete</h></td>
                        </tr>
                        <tr>
                            <td>Nov 13 2023 10:10 a.m</td>
                            <td>Ernst Handel</td>
                            <td>Voice</td>
                            <td>Text Generation Completed</td>
                            <td><h>Edit</h>|<h>View</h>|<h>Delete</h></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};
export default Navbar;
