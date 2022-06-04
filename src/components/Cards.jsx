import React from 'react'
import styled from 'styled-components'

function Cards({title,data,info, link, points,image, color, changePos}){
    let mainPoints
    let names = []
    let string = ''
    let date = ''
    
    
    if(data){
     data.filter(myRepo => myRepo["fork"] === false)
      .map((info) => {
        
        let date = info.created_at
        names.push(info)
        return data
      })
    }
   
    if(points){
        mainPoints = points.map(point => <li>{point}</li>)
    }
    
    return (
      <MainContainer>
        {data && data ?  names.map((info) => 
          <BoxContainer changePos={changePos}>
          <Title color={color}>
            {info.name}
          </Title>
          <p>{info.language}</p>
          <p>{info.created_at}</p>
        </BoxContainer> 
        ) : 
        <BoxContainer changePos={changePos}>
          <Title color={color}>
            {title && title ? title : "LOADING..."}
          </Title>
          <p>{info}</p>
          {points ? mainPoints : ""}
        </BoxContainer>
        }
      </MainContainer> 


    )
}

export default Cards


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color:${({color}) => color ? color : 'white'};
`;


const MainContainer = styled.div`
  width: 30%;
  height:100% ;
  
  text-align:center;
  align-items: center;

  font-family: 'Times New Roman', Times, serif;
  font-size:20px;

  margin-left:${({changePos}) => changePos ? "2%" : '34%'};
  margin-top:2%;
  margin-bottom:2% ;
`;

const BoxContainer = styled.div`
  width: 100%;
  height:100% ;
  

  color:white;
  background-color: #d00404a6;

  border-radius: 25px;
  border: 2px solid #f1f6ea;

  text-align:center;
  align-items: center;

  font-family: 'Times New Roman', Times, serif;
  font-size:20px;

  margin-left:${({changePos}) => !changePos ? "2%" : '34%'};
  margin-top:2%;
  margin-bottom:2% ;
`;