import React from "react";
import { useState } from "react";
import './style.css';
import './globals.css';
import { Link } from 'react-router-dom';






function App() {
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked}`);
    
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
    else {
      setUserInfo({
        languages: languages.filter(
          (e) => e !== value
        ),
        response: languages.filter(
          (e) => e !== value
        ),
      });
    }
  };
}
















const Navbar = () => {
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked}`);
    document.getElementById('but').style.display='block';
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
      document.getElementById('show').innerHTML+=`<div class="nice-form-group">
      <label><h>${value} </h>Translation</label>
      <textarea rows="4" ></textarea>
    </div>`
    }
    else {
      setUserInfo({
        languages: languages.filter(
          (e) => e !== value
        ),
        response: languages.filter(
          (e) => e !== value
        ),
      });
    }
  };




















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
            <label className="addnewstory">Dubbing (Text + Voice)</label>
          </div>
          <fieldset class="nice-form-group" id="selectlanguage">
            <legend>Select your favorite languages</legend>
            <div className="fieldset">
              <div class="nice-form-group">
                <input type="checkbox" id="" value="English"  onChange={handleChange}/>
                <label for="">English</label>
              </div>

              <div class="nice-form-group">
                <input type="checkbox" id="" value="Spanish" onChange={handleChange}/>
                <label for="">Spanish</label>
              </div>

              <div class="nice-form-group">
                <input type="checkbox" id="" value='French' onChange={handleChange}/>
                <label for="">French</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='German' onChange={handleChange}/>
                <label for="">German</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Italian' onChange={handleChange}/>
                <label for="">Italian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Portugese' onChange={handleChange}/>
                <label for="">Portugese</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Dutch' onChange={handleChange}/>
                <label for="">Dutch</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Russian' onChange={handleChange}/>
                <label for="">Russian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Chinese' onChange={handleChange}/>
                <label for="">Chinese</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Japanese' onChange={handleChange}/>
                <label for="">Japanese</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Korean' onChange={handleChange}/>
                <label for="">Korean</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Arabic' onChange={handleChange}/>
                <label for="">Arabic</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Turkish' onChange={handleChange}/>
                <label for="">Turkish</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Hindi' onChange={handleChange}/>
                <label for="">Hindi</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Bengali' onChange={handleChange}/>
                <label for="">Bengali</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Urdu' onChange={handleChange}/>
                <label for="">Urdu</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Punjabi' onChange={handleChange}/>
                <label for="">Punjabi</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Swahili' onChange={handleChange}/>
                <label for="">Swahili</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Thai' onChange={handleChange}/>
                <label for="">Thai</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Vietnamese' onChange={handleChange}/>
                <label for="">vietnamese</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Indonesian' onChange={handleChange}/>
                <label for="">Indonesian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Malay' onChange={handleChange}/>
                <label for="">Malay</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Filipino' onChange={handleChange}/>
                <label for="">Filipino</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Greek' onChange={handleChange}/>
                <label for="">Greek</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Hebrew' onChange={handleChange}/>
                <label for="">Hebrew</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Hungarian' onChange={handleChange}/>
                <label for="">Hungarian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Polish' onChange={handleChange}/>
                <label for="">Polish</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Romanian' onChange={handleChange}/>
                <label for="">Romanian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Czech' onChange={handleChange}/>
                <label for="">Czech</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Slovak' onChange={handleChange}/>
                <label for="">Slovak</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Bulgarian' onChange={handleChange}/>
                <label for="">Bulgarian</label>
              </div>
              <div class="nice-form-group">
                <input type="checkbox" id="" value='Mongolian' onChange={handleChange}/>
                <label for="">Mongolian</label>
              </div>
            </div>
          </fieldset>
          <div class="nice-form-group" id="inputtext">
            <label>Text</label>
            <textarea rows="9" ></textarea>
          </div>

          <div className="my-6 flex flex-col gap-4" id="inputsubmit">
            <button class="toggle-code save" onChange={handleChange}>
              Submit
            </button>
                <div className="show" id="show">
          
                </div>
            <div className="but" id="but">
            <button class="toggle-code save" id="goback" onChange={handleChange}>
              Go Back
            </button>
            <button class="toggle-code save" id="vd" onChange={handleChange}>
              Voice Debugging
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
