import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);

      const teamStyle ={
         border: '2px solid purple',
         margin: '15px',
         padding:'15px'
      }
    //   useState babohar kore player add korar niyom 
     const handleAdd = () =>{
              const newTeam = team +1;
              setTeam (newTeam)
     }
     
    //  useState babohar kore player romve korar niyom
    const handleRemove = () => {
        const newTeam = team -1;
        setTeam (newTeam);
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            {/* added a player  */}
            <button className='button' onClick={handleAdd}>Add</button>
            {/* remove a  player */}
            <button className='button' onClick={handleRemove}>Remove</button>
        </div>
    )
}