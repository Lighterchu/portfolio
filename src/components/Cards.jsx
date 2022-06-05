import React from 'react'
import styled from 'styled-components'

function Cards({title,data,info, link, points,image, color, changePos, grid,hasData }){
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
          <Title color={holdingColor}>
            {info.name}
          </Title>
          <RepoInfo>
            {info.language}
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

export default Cards


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color:${({color}) => color ? color : 'white'};
`;

const RepoInfo = styled.p`
  font-size: 1.5em;
  text-align: center;
`


const MainContainer = styled.div`
  width: 30%;
  height:100% ;
  text-align:center;
  align-items: center;

   
  
  display:${({grid}) => grid ? "grid" : 'flex'};
  flex-wrap: wrap;
  grid-template-columns:repeat(4,1fr);
  grid-gap: 2rem;
  grid-template-rows: 200px 150px;

  font-family: 'Times New Roman', Times, serif;
  font-size:20px;

  margin-left:${({changePos}) => changePos ? "2%" : '34%'};
  margin-top:2%;
  margin-bottom:2% ;
`;

const BoxContainer = styled.div`
  width: 100%;
  height:100% ;
  
  padding-top: 5%;

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