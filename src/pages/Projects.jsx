import React, {useState, useEffect} from 'react';
import Cards from '../components/Cards';


function Projects() {

  const [title, SetTitle] = useState('')
  const [description, SetDescription] = useState('')
  const [links, SetLinks] = useState('')

  

  useEffect(() => {
    fetch("https://api.github.com/users/Lighterchu/repos")
    .then(res => res.json())
    .then(data => {
      SetTitle(data[1].name)
      console.log(data[1].html_url)
      SetDescription(data[1].description)
      SetLinks(data[1].html_url)
    })
  },[])


  return (
    <div className="project-container">
       <Cards title={title} changePos={true} image={false} info={description} link={links} />
       <Cards title="Project one" changePos={true} image={true} info={"Im a boot camp student as well a self taught programmer, I am very passion about the work I put into my projects, bringing my dreams to life"} />
       <Cards title="Project one" changePos={true} image={true} info={"Im a boot camp student as well a self taught programmer, I am very passion about the work I put into my projects, bringing my dreams to life"} />
       <Cards title="Project one" changePos={true} image={true} info={"Im a boot camp student as well a self taught programmer, I am very passion about the work I put into my projects, bringing my dreams to life"} />
       <Cards title="Project one" changePos={true} image={true} info={"Im a boot camp student as well a self taught programmer, I am very passion about the work I put into my projects, bringing my dreams to life"} />
       <Cards title="Project one" changePos={true} image={true} info={"Im a boot camp student as well a self taught programmer, I am very passion about the work I put into my projects, bringing my dreams to life"} />
       <Cards title="Project one" changePos={true} image={true} info={"Im a boot camp student as well a self taught programmer, I am very passion about the work I put into my projects, bringing my dreams to life"} />
       <Cards title="Project one" changePos={true} image={true} info={"Im a boot camp student as well a self taught programmer, I am very passion about the work I put into my projects, bringing my dreams to life"} />
       <Cards title="Project one" changePos={true} image={true} info={"Im a boot camp student as well a self taught programmer, I am very passion about the work I put into my projects, bringing my dreams to life"} />
    </div>
  )
}

export default Projects