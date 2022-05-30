import React from 'react'

function Cards({title, info, points,image}){
    let mainPoints

   

    if(points){
        mainPoints = points.map(point => <li>{point}</li>)
    }
    
    return (
      <div className="cards-container">
        <h1>{title}</h1>
        {image ? <img alt="loading"/> : null}
        <p>{info}</p>
       {points ? mainPoints : ""}
      </div>
    )
}

export default Cards