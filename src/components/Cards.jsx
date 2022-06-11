import { render } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'

export const Cards = ({title,data,info,points,color, changePos, grid, Categorie}) => {
    let mainPoints
    let names = []
    
  
    
    if(data){
     data.filter(myRepo => myRepo["fork"] === false)
      .map((info,key) => {
        names.push(info)
        return data
      })
    }

    // console.log(javaScript)
    // console.log(ahkhotKey)
    // console.log(lua)

    let ErrorHanding = () => {
      return  (
      <BoxContainer>
        <Title color={color}>
          {title && title ? title : "LOADING..."}
        </Title>
        <p>{info}</p>
        {points ? mainPoints : ""}
      </BoxContainer>
      )
    }

    let WebDev = (info,link) => {
      console.log(info)
      if(Categorie === "Web Developement" && info.language === "JavaScript"){
        return (
          <BoxContainer color={"purple"}>
          <Title>
            {info.name}
          </Title>
          <RepoInfo>
            {info.language}
            <br/>
            <button>{link}</button>
            <br/>
            {info.created_at}
          </RepoInfo>
        </BoxContainer> 
        )
        }
    }

    let GameDev = (info) => {
      if(Categorie === "Game Development" && info.language === "Lua"){
        return (
          <BoxContainer color={"blue"}>
            <Title>
              {info.name}
            </Title>
            <RepoInfo>
              {info.language}
              <br/>
              {info.created_at}
            </RepoInfo>
          </BoxContainer> 
          )
        }else{
          return (
            <BoxContainer color={"blue"}>
              <Title>
                {info.name}
              </Title>
              <RepoInfo>
                {"Lua"}
                <br/>
                {info.created_at}
              </RepoInfo>
            </BoxContainer> 
            )
        }
    }
    
    let OtherPros = (info) => {
      return (
        <BoxContainer color={"orange"}>
        <Title>
          {info.name}
        </Title>
        <RepoInfo>
          {info.language}
          <br/>
          {info.created_at}
        </RepoInfo>
      </BoxContainer> 
      )
    }

    
    //showing the skills
    let SkillSets = (info) => {
      let repoLink = info.svn_url
      console.log("grabbing rep link",info)
      //working out which catergorie to go in and handles the each card
      if(Categorie === "Web Developement" && info.language === "JavaScript") {
        return WebDev(info,repoLink)
      }
      if(Categorie === "Web Developement" && info.language === "Ruby") {
        return WebDev(info,repoLink)
      }
      if (Categorie === "Game Developement" && info.language === "Lua" ) {
        return GameDev(info,repoLink)
      }
      if(Categorie === "Game Developement" && info.language === "CSS"){
        return GameDev(info,repoLink)
      }
      if(Categorie === "Other Projects" && info.language === "AutoHotkey") {
        return OtherPros(info,repoLink)
      }

    }    

   
    
   
    if(points){
        mainPoints = points.map(point => <li>{point}</li>)
    }
    
    return (
      <MainContainer changePos={changePos} grid={grid}>
        {data && data ?  names.map((info) => 
          SkillSets(info)
        ) : 
          ErrorHanding()
        }
      </MainContainer> 
    )
}




const Title = styled.h1`
  font-size: 1.2em;
  /* text-align: center; */
  color:${({color}) => color ? color : 'white'};
`;

const RepoInfo = styled.p`
  font-size: 1.1;
  
  /* text-align: center; */
`


const MainContainer = styled.div`
 // width: 90%;
  width:90%;
  
  height:100% ;
  text-align:center;
  align-items: center;


  
  
  display:${({grid}) => grid ? "grid" : 'flex'};
  grid-template-columns:33% 33% 33%;
  column-gap: 20px;

  

  font-family: 'Times New Roman', Times, serif;
  font-size:20px;

  margin-left:${({changePos}) => changePos ? "3%" : '16%'};
  margin-top:2%;
  margin-bottom:2% ;
`;

const BoxContainer = styled.div`
  
  width:70%;
  height:100% ;
  
  padding-top: 2%;
  
  color:white;
  /* background-color: #d00404a6; */
  background-color:${({color}) => color ? color : '#d00404a6;'};
  
  border-radius: 25px;
  border: 2px solid #f1f6ea;

  text-align:center;
  align-items: center;

  

  font-family: 'Times New Roman', Times, serif;
  font-size:20px;

  margin-top:2%;
  margin-bottom:2% ;
`;