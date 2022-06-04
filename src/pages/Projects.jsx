import React, {useState, useEffect} from 'react';
import Cards from '../components/Cards';


function Projects() {

  const [AllData, SetAllData] = useState('')
  

  
 
  useEffect(() => {
    fetch("https://api.github.com/users/Lighterchu/repos?per_page=200")
    .then(res => res.json())
    .then(data => {
      SetAllData(data)
     
      
    })
  },[])
 

  return (
    <div className="project-container">
      <Cards data={AllData} changePos={true} grid={true}/>
    </div>
  )
}

export default Projects