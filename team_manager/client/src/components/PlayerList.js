import React from 'react';
import axios from 'axios';


export default props => {
    const { removeFromDom } = props;
    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res => {
                removeFromDom(playerId)
            })
    }
    
    return (
        <div>
            <table style={{marginLeft: "500px"}}>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preffered Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map((player, i) => {
                        return(
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td>{player.prefferedPosition}</td>
                                <td>
                                    <button onClick={(e) => deletePlayer(player._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>    
        
    )
}