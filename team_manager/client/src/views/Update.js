import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const { id } = props;
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState([]);
   

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            });
    },[]);

    const clickHandler = (player, decision) => {
        player.status[id-1] = decision;
        console.log(player);
        axios.put('http://localhost:8000/api/players/'+player._id, player)
            
    }

    return (
        <div>
            <h1>Player Status - Game {id}</h1>
            <Link to="/status/game/1">Game 1</Link> | 
            <Link to="/status/game/2">Game 2</Link> | 
            <Link to="/status/game/3">Game 3</Link>
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {
                    loaded && (
                        <tbody>
                            {players.map((player, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{player.name}</td>
                                        <td>
                                            {
                                                player.status[id-1] === "playing" ?
                                                <button style={{background:"green"}}>Playing</button> :
                                                <button onClick={() => clickHandler(player, "playing")}>Playing</button>
                                            }
                                            {
                                                player.status[id-1] === "not playing" ?
                                                <buton style={{background:"red"}}>Not Playing</buton> :
                                                <button onClick={() => clickHandler(player, "not playing")}>Not Playing</button>
                                            }
                                            {
                                                player.status[id-1] === "undecided" ?
                                                <button style={{background:"yellow"}}>Undecided</button> :
                                                <button onClick={() => clickHandler(player, "undecided")}>Undecided</button>
                                            }
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    )
                }
                
            </table>
        </div>
    )
}