import React from 'react'

function Cards({title, info, points}){
    let mainPoints

   

    if(points){
        mainPoints = points.map(point => <li>{point}</li>)
    }
    
    return (
      <div className="cards-container">
        <h1>{title}</h1>
        <p>{info}</p>
        {points ? mainPoints : ""}
      </div>
    )
}

export default Cards