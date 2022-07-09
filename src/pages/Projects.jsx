import React, {useState, useEffect} from 'react';
import {Cards} from '../components/Cards';
import styled from 'styled-components'

export const Projects = ({link}) => {

  const [AllData, SetAllData] = useState('')
  const [hasData, SetHasData] = useState(false)
 
  
  

  
 
  useEffect(() => {
    fetch("https://api.github.com/users/Lighterchu/repos?per_page=300")
    .then(res => res.json())
    .then(data => {
      SetAllData(data)
      SetHasData(true)
     
      
    }).catch(err => {
      console.log("can not grab data")
      SetHasData(false)
    })
  },[])
  
  return (
    <div>
      <ProjectContainers>
      <ProjectCategoryTitle>Web Development</ProjectCategoryTitle>
        <Cards data={AllData} changePos={true} dataClear={hasData} Categorie={"Web Developement"}/>
      </ProjectContainers>
      <ProjectContainers>
      <ProjectCategoryTitle>Game Development</ProjectCategoryTitle>
        <Cards data={AllData} changePos={true} dataClear={hasData} Categorie={"Game Developement"}/>
      </ProjectContainers>
      <ProjectContainers>
        <ProjectCategoryTitle>Work Projects</ProjectCategoryTitle>
        <Cards data={AllData} changePos={true} dataClear={hasData} Categorie={"Other Projects"}/>
      </ProjectContainers> 
    </div>
  )
}
const ProjectCategoryTitle = styled.h1`
  padding-left: 1%;
  padding-top: 1%;
  color: #e3f0e27a;
`


const ProjectContainers = styled.div`
  margin-top:1%;
  margin-left: 1%;
  width: 98%;
  /* height:60px;  */
  /* height:${ (clicked) => clicked ? "200px" : "500px"}; */
  
  overflow: scroll;

  border-radius: 25px;
  border: 2px solid #f1f6ea;
  
  background-color:rgba(80, 76, 76, 0.585);
`;