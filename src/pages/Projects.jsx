import React, {useState, useEffect} from 'react';
import Cards from '../components/Cards';

function Projects() {

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
    <div className="project-container">
      <Cards data={AllData} changePos={true} grid={true} dataClear={hasData}/>
     
    </div>
  )
}

export default Projects