import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Adults from './pages/Adults';
import Children from './pages/Children';
import Home from './pages/Home';

function App() {

  const [dbAccount, setDbAccount] = useState({

    "accounts": [
      {
        "accountId": 1,
        "parentId": [1],
        "childId": [1]
      }
    ]
  })

  const [dbChildren, setDbChildren] = useState({

    "children": [
      {
        "accountId": 1,
        "childId": 1,
        "userName": "theo",
        "password": "testtheo",
        "pocketMoney": 30,
        "balance": 100,
        "goalTitle": "MineCraft",
        "goalAmount": 500,
        "goalPic": "https://www.kalaskungen.com/pub_images/original/PA424.jpg"
      }
    ]
  })

  const [dbParent, setDbParent] = useState({

    "parents": [
      {
        "accountId": 1,
        "parentId": 1,
        "userName": "maria",
        "password": "testmaria"
      }, {
        "accountId": 1,
        "parentId": 2,
        "userName": "ulf",
        "password": "testulf"
      }
    ]
  })



  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home dbParent={dbParent} dbChildren={dbChildren}/>
        </Route>
        <Route exact path="/Children">
          <Children dbAccount={dbAccount} dbChildren={dbChildren}/>
        </Route>
        <Route exact path="/Adults">
          <Adults dbAccount={dbAccount} dbParent={dbParent} dbChildren={dbChildren}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


