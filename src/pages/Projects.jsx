import React, {useState, useEffect} from 'react';
import {Cards} from '../components/Cards';
import styled from 'styled-components'

export const Projects = () => {

  const [AllData, SetAllData] = useState('')
  const [hasData, SetHasData] = useState(false)
  

  
 
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
 

  return (
    <div>
      <ProjectContainers>
        <h1>Web Development</h1>
        <Cards data={AllData} changePos={true} grid={false} dataClear={hasData}/>
      </ProjectContainers>
      <ProjectContainers>
        <h1>Game Development</h1>
        <Cards data={AllData} changePos={true} grid={false} dataClear={hasData}/>
      </ProjectContainers>
      <ProjectContainers>
        <h1>Work Projects</h1>
        <Cards data={AllData} changePos={true} grid={false} dataClear={hasData}/>
      </ProjectContainers>
    </div>
  )
}

const ProjectContainers = styled.div`
  margin-top:2%;
  margin-left: 1%;
  width: 70%;
  height: 10%;
  overflow: scroll;

  border-radius: 25px;
  border: 2px solid #f1f6ea;
  
  background-color:rgba(80, 76, 76, 0.585);
`;