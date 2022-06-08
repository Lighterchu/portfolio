import React from 'react'
import styled from 'styled-components'

export const Cards = ({title,data,info, link, points,image, color, changePos, grid,hasData }) => {
    let mainPoints
    let names = []
    let holdingColor = ''
    
    
  
    
    if(data){
     data.filter(myRepo => myRepo["fork"] === false)
      .map((info,key) => {
        console.log(info)
        names.push(info)
        return data
      })
    }

    
    
    
   
    if(points){
        mainPoints = points.map(point => <li>{point}</li>)
    }
    
    return (
      <MainContainer changePos={changePos} grid={grid}>
        {data && data ?  names.map((info) => 
        <BoxContainer>
          <Title>
            {info.name}
          </Title>
          <RepoInfo>
            {info.language}
            <br/>
            {info.created_at}
          </RepoInfo>
        </BoxContainer> 
        ) : 
        <BoxContainer>
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




const Title = styled.h1`
  font-size: 0.8em;
  /* text-align: center; */
  color:${({color}) => color ? color : 'white'};
`;

const RepoInfo = styled.p`
  font-size: 1.1;
  /* text-align: center; */
`


const MainContainer = styled.div`
  width: 50%;
  height:100% ;
  text-align:center;
  align-items: center;

  
  
  display:${({grid}) => grid ? "grid" : 'flex'};
  grid-template-columns:33% 33% 33%;
  column-gap: 20px;

  

  font-family: 'Times New Roman', Times, serif;
  font-size:20px;

  margin-left:${({changePos}) => changePos ? "2%" : '34%'};
  margin-top:2%;
  margin-bottom:2% ;
`;

const BoxContainer = styled.div`
  
  width:70%;
  height:100% ;
  
  padding-top: 2%;
  
  color:white;
  background-color: #d00404a6;
  
  border-radius: 25px;
  border: 2px solid #f1f6ea;

  text-align:center;
  align-items: center;

  

  font-family: 'Times New Roman', Times, serif;
  font-size:20px;

  margin-top:2%;
  margin-bottom:2% ;
`;