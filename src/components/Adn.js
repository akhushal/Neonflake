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
          <label className="addnewstory">Add New Story</label>
        </div>
        <div className="nice-form-group">
          <label>Name</label>
          <input
        type="text"
         id="filename"
        // onChange={handleInputChange}
      />
          
        </div>
        <div className="nice-form-group">
          <label>Select Voice</label>
          <select>
          <option></option>
        </select>
        </div>
        <div class="nice-form-group">
        <label>Description</label>
        <textarea rows="9" ></textarea>
      </div>
       {/* <div className="nice-form-group">
          <label>Select Voice</label>
          <select>
          <option>Select</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Tamil</option>
          <option>Japanese</option>
           </select>
       </div> */}






       <fieldset class="nice-form-group" id="selectlanguage">
            <legend>Select your favorite languages</legend>
            <div className="fieldset">
              <div class="nice-form-group">
                <input type="checkbox" id="" value="English"  />
                <label for="">English</label>
              </div>

              <div class="nice-form-group">
                <input type="checkbox" id="" value="Spanish" />
                <label for="">Spanish</label>
              </div>

              <div class="nice-form-group">
                <input type="checkbox" id="" value='French' />
                <label for="">French</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='German' />
                <label for="">German</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Italian' />
                <label for="">Italian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Portugese' />
                <label for="">Portugese</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Dutch' />
                <label for="">Dutch</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Russian' />
                <label for="">Russian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Chinese' />
                <label for="">Chinese</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Japanese' />
                <label for="">Japanese</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Korean' />
                <label for="">Korean</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Arabic' />
                <label for="">Arabic</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Turkish' />
                <label for="">Turkish</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Hindi' />
                <label for="">Hindi</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Bengali' />
                <label for="">Bengali</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Urdu' />
                <label for="">Urdu</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Punjabi' />
                <label for="">Punjabi</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Swahili' />
                <label for="">Swahili</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Thai' />
                <label for="">Thai</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Vietnamese' />
                <label for="">vietnamese</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Indonesian' />
                <label for="">Indonesian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Malay' />
                <label for="">Malay</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Filipino' />
                <label for="">Filipino</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Greek' />
                <label for="">Greek</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Hebrew' />
                <label for="">Hebrew</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Hungarian' />
                <label for="">Hungarian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Polish' />
                <label for="">Polish</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Romanian' />
                <label for="">Romanian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Czech' />
                <label for="">Czech</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Slovak' />
                <label for="">Slovak</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Bulgarian' />
                <label for="">Bulgarian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Mongolian' />
                <label for="">Mongolian</label>
              </div>
            </div>
          </fieldset>
















        <div className="my-6 flex flex-col gap-4">         
          <button class="toggle-code save">
          <Link to='/gtfs' className="ansl" >Generate Text</Link>
          </button>
          <button class="toggle-code cancel">
             Cancel
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
