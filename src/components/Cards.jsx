import React from 'react'

function Cards({title, info, points}){
    let mainPoints

    let handleClick = () => {
    //    TOOD
    // need to add function when click the image and show more detail
    }

    if(points){
        mainPoints = points.map(point => <li onClick={handleClick}>{point}</li>)
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