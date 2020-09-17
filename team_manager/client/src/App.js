import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import './App.css';
import Update from './views/Update';
import { Link } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Link to='/players/list'>Manage Players</Link>| <Link to='/status/game/1'>Manage Player status</Link>
      <Router>
        <Main path="/players/list" />
        <Create path="/players/addplayer" />
        <Update path="/status/game/:id" />
      </Router>
      
      
    </div>
  );
}

export default App;