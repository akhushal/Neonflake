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
            <Link to='/cnvoices' className="ansl" >Clone New Story</Link> 
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
                            <th>Added On</th>
                            <th>Name</th>
                            <th>Voice ID</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Nov 13 2023 10:10 a.m</td>
                            <td>Maria Anders</td>
                            <td>11111111111</td>
                            <td><h>Edit</h>|<h>View</h>|<h>Delete</h></td>
                        </tr>
                        <tr>
                            <td>Nov 12 2023 10:10 a.m</td>
                            <td>Francisco Chang</td>
                            <td>0000000000</td>
                            <td><h>Edit</h>|<h>View</h>|<h>Delete</h></td>
                        </tr>
                        <tr>
                            <td>Nov 13 2023 10:10 a.m</td>
                            <td>Ernst Handel</td>
                            <td>22222222222</td>
                            <td><h>Edit</h>|<h>View</h>|<h>Delete</h></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};
export default Navbar;
