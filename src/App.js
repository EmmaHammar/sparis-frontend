import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Adults from './pages/adults';
import Children from './pages/children';
import Home from './pages/home';

function App() {

  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 10)
  })

  return (

    // {isloading ? <Loader /> :
    // }
    <>
      {/* Add Loader later when testing finish */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/children" element={<Children />} />
            <Route exact path="/adults" element={<Adults />} />
          </Routes>
        </Router>
    </>

  );
}

export default App;