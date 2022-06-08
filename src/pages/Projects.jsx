import React, {useState, useEffect} from 'react';
import {Cards} from '../components/Cards';
import styled from 'styled-components'

export const Projects = () => {

  const [AllData, SetAllData] = useState('')
  const [hasData, SetHasData] = useState(false)
  const [isClicked, SetClicked] = useState(false)
  
  

  
 
  useEffect(() => {
    fetch("https://api.github.com/users/Lighterchu/repos?per_page=200")
    .then(res => res.json())
    .then(data => {
      SetAllData(data)
      SetHasData(true)
     
      
    }).catch(err => {
      console.log("can not grab data")
      SetHasData(false)
    })
  },[])
  
  const clickHandler = () => SetClicked(isClicked => !isClicked);


  return (
    <div>
      <ProjectContainers isClicked={isClicked} onClick={clickHandler}>
      <ProjectCategoryTitle>Web Development</ProjectCategoryTitle>
        <Cards data={AllData} changePos={true} dataClear={hasData}/>
      </ProjectContainers>
      <ProjectContainers>
      <ProjectCategoryTitle>Game Development</ProjectCategoryTitle>
        <Cards data={AllData} changePos={true} dataClear={hasData}/>
      </ProjectContainers>
      <ProjectContainers>
        <ProjectCategoryTitle>Work Projects</ProjectCategoryTitle>
        <Cards data={AllData} changePos={true} dataClear={hasData}/>
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
  height:${ (isClicked) => isClicked ? "200px" : "500px"};
  
  overflow: scroll;

  border-radius: 25px;
  border: 2px solid #f1f6ea;
  
  background-color:rgba(80, 76, 76, 0.585);
`;