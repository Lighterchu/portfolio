import React from 'react'
import Cards from '../components/Cards';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <div className="home-container">
       <Cards title="Ben" info={"Im a boot camp student as well a self taught programmer"} />
       <div>
           <ContactUs />

       </div>
    </div>
  )
}

export default Home