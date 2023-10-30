import { useState } from "react"

export default function Student (){

    const [student, setStudent] = useState(10)
    const cardStyle = {
        
        border:'4px solid yellow',
        padding :'20px',
        margin :'20px'
    }
    const btnStyle ={
        backgroundColor:'black',
        color:'white'
    }

    const studentAdd = () =>{
        const newStudent = student +1;
        setStudent(newStudent);
    }
  const studentRemove = () =>{
           const newStudent = student - 1;
                setStudent (newStudent)
  }

    return (
        <div style={cardStyle}>
            <h3>Students:{student} </h3>
           <button style={btnStyle} onClick={studentAdd}>Add</button>
           <button style={btnStyle} onClick={studentRemove}>Remove</button>
        </div>
    )
}