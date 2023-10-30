import { useEffect, useState } from "react"

export default function Photo (){
    const [photos,setPhotos] = useState([])
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=> res.json())
    .then(pho =>setPhotos(pho))

    },[])

    
    return(
        <div>
            <h2>ALL Photos:{photos.length} </h2>
           
           
        </div>
    )
}