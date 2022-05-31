import React from 'react'
import styled from 'styled-components'

function Cards({title, info, link, points,image, color, changePos}){
    let mainPoints

   

    if(points){
        mainPoints = points.map(point => <li>{point}</li>)
    }
    
    return (
      <Wrapper changePos={changePos}>
        <Title color={color}>
          {title}
        </Title>
        {image ? <img alt="loading"/> : null}
        <p>{info}</p>
        {/* <a>{link}</a> */}
       {points ? mainPoints : ""}
      </Wrapper>
    )
}

export default Cards


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color:${({color}) => color ? color : 'white'};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  width: 30%;
  

  color:rgb(233, 233, 233);
  background-color: rgba(255, 64, 0, 0.633);

  border-radius: 25px;
  border: 2px solid #f1f6ea;

  text-align:center;
  align-items: center;

  font-family: 'Times New Roman', Times, serif;
  font-size:20px;

  margin-left:${({changePos}) => changePos ? "2%" : '34%'};
  margin-top:2%;
  margin-bottom:2% ;
`;