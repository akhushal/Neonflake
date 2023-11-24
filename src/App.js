import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adn from "./components/Adn"
import CNVoices from "./components/CNVoices"
import Stories from "./components/Stories"
import Gtfs from './components/Gtfs';
import Gvsfsn from './components/Gvsfsn';
import Gvfssn from './components/Gvfssn';
import Voices from './components/Voices';
import Dubbing from './components/Dubbing';
import Newtranslation from './components/Newtrasnlation'
import Dubbingtpv from './components/Dubbingtpv'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Adn />} />
          <Route path='/adn' element={<Adn />} />
          <Route path='/cnvoices' element={<CNVoices />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/gtfs' element={<Gtfs />} />
          <Route path='/gvsfsn' element={<Gvsfsn />} />
          <Route path='/gvfssn' element={<Gvfssn />} />
          <Route path='/voices' element={<Voices />} />
          <Route path='/dubbing' element={<Dubbing />} />
          <Route path='/newtranslation' element={<Newtranslation />} />
          <Route path='/dubbingtpv' element={<Dubbingtpv />} />
          {/* <Route path='/cloneNewVoice' element={<CloneNewVoice />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
};