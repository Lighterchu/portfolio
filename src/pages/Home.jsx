import React from 'react'
import {Cards} from '../components/Cards';
import {ContactUs} from '../components/ContactUs';

export const Home = () => {
  return (
    <div className="home-container">
       <Cards title="Hi Am Ben" info={"A highly motivated self-starter, with a passion for web design, I am seeking an opportunity to Web Development."} />
       <div>
           <ContactUs />
      </div>
      
    </div>
  )
}

