import React from 'react'
import styled from 'styled-components'

function Cards({title,data,info, link, points,image, color, changePos}){
    let mainPoints
    let names = []
    let language = []
    let project = {}
    if(data){
      
      // data.map((info) => {
      //   console.log(info)
      //   info.filter((notForked) =>{
          
      //   }) 
      // })

      data.filter(myRepo => myRepo["fork"] == false)
      .map((info) => {
        // console.log(info)
        project = {
          name: info.name,
          language: info.language
        }
       

        // console.log(project)
        names.push(info.name)
      })
    }
    // console.log(data)

    if(points){
        mainPoints = points.map(point => <li>{point}</li>)
    }
    
    return (
      // <Wrapper changePos={changePos}>
      //   <Title color={color}>
      //     {title}
      //   </Title>
      //   {image ? <img alt="loading"/> : null}
      //   <p>{info}</p>
      //   {/* <a>{link}</a> */}
      //  {points ? mainPoints : ""}
      // </Wrapper>

    

      <MainContainer>
        {data && data ?  names.map((info) => 
          <BoxContainer changePos={changePos}>
          <Title color={color}>
            {info}
          </Title>
        </BoxContainer> 
        ) : 
        <BoxContainer changePos={changePos}>
          <Title color={color}>
            {title}
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