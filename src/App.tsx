import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loader from './components/Loader/Loader';
import Adults from './pages/Adults';
import Children from './pages/Children';
import Home from './pages/Home';

// const [database, setDatabase] = useState([

//Skapa state som sparat data om inloggad user (children or adult)

// Databas.
// "children": [
//   {
//       "accountId": 1,
//       "childId": 1,
//       "userName": "theo",
//       "password": "testtheo",
//       “pocketMoney”: 30,
//       "balance": 100,
//       "goalTitle": "MineCraft",
//       "goalAmount": 500,
//       "goalPic": "https://www.kalaskungen.com/pub_images/original/PA424.jpg"
//   }

// ])


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Children">
          <Children />
        </Route>
        <Route exact path="/Adults">
          <Adults />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


