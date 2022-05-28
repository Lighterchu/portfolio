import React from 'react'
import Cards from '../components/Cards';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="home-container">
       <Cards title="Ben" info={"Im a boot camp student as well a self taught programmer"} />
       <div>
           <Contact />
       </div>
    </div>
  )
}

export default Home