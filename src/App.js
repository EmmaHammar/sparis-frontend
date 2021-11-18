import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Adults from './pages/adults';
import Children from './pages/children';
import Home from './pages/home';

function App() {
  const[changePage,setChangePage]=useState(false)

  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })

  return (

    <>
    {/* {isloading ? <Loader /> :  */}
    
    <div style={{ maxWidth: "375px", display:"flex", justifyContent: "center", padding: "0rem", margin: "30px auto", boxSizing: "none"}}>
      {/* Add Loader later when testing finish */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/children" element={<Children setChangePage={setChangePage} changePage={changePage} />} />
            <Route exact path="/adults" element={<Adults />} />
          </Routes>
        </Router>
    </div>
    </>
  );
}

export default App;