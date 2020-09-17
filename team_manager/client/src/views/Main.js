import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import PlayerList from '../components/PlayerList';

export default () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            });
    },[]);

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }
    


    return (
        <div>
           <Link to="/players/list">List</Link> | 
           <Link to="/players/addplayer">Add Player</Link>
           {loaded && <PlayerList players={players} removeFromDom={removeFromDom}/>}
           
        </div>
    )
}
