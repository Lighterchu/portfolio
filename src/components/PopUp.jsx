import React from 'react'
import { Alert } from 'react-bootstrap';
const PopUp = ({toggle}) => {
  const handleClick = () => {
   toggle();
  };

  return (
   <div className="pop-container">
        <h1>Has Been sent</h1>
        <p>Ill reply as soon as I can, thank you for contacting me!!!</p>
        <span className="close" onClick={handleClick}>
        close
        </span>
   </div>
  );
}
export default PopUp