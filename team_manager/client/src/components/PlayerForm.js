import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default () => {
    const [name, setName] = useState(""); 
    const [prefferedPosition, setPrefferedPosition] = useState("");
    const [errors, setErrors] = useState([]);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
           name,
           prefferedPosition
        })
            .then(()=>navigate('/players/list'))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr =[];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err,index) => <p key={index}>{err}</p>)}
            <p>
                <label>Player Name:</label>
                <input type="text" onChange = {(e)=>setName(e.target.value)}/>
            </p>
            <p>
                <label>Preffered Position:</label>
                <input type="text" onChange = {(e)=>setPrefferedPosition(e.target.value)}/>
            </p>
            <button onClick={()=>navigate('/')}>Cancel</button>
            <input type="submit" value="Submit" />     
        </form>
    )
}