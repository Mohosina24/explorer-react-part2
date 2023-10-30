// ai page amra ki vabe JSON placeholder theke data ane load korate pari seitai dekbo 

import { useEffect, useState } from "react"
import User from "./User"

export default function Users (){
    // 1. declare a state to hold the data 
   const [users, setUser] = useState([])
//    2. useEffect with call back function and dependancy array
useEffect(()=>{
    
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUser(data))


},[])


     return (
        <div style={{
       border:'2px solid red',
       margin: '15px'
        }}>
            <h2>Users:{users.length}</h2>{
                     users.map(user => <User user ={user} ></User>)
            }
          
        </div>
    )
}