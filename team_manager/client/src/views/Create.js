import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import PlayerForm from '../components/PlayerForm';

export default props => {
    const [player, setPlayer] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/players/" + props.id)
            .then(res => setPlayer(res.data))
    }, [])
    return (
        <div>
            <Link to="/players/list">List</Link> |
            <Link to="/players/addplayer">Add Player</Link>
            <p>Add player:</p>
            <PlayerForm />                   
        </div>
    )
}