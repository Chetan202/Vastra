import { useState } from 'react'
import './App.css'
import Homepage from './Home/Homepage'
import Navbar from './Navbar'
import React from 'react';
import MenPage from './Men/MenPage'
import WomenPage from './Women/WomenPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menpage" element={<MenPage />} />
          <Route path="/womenpage" element={<WomenPage/>}/>
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    );
}


export default App
