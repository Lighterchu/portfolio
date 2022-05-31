import React, { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import PopUp from '../components/PopUp';


const ContactUs = () => {
  const form = useRef();
  const [Sent,SetSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_ri5hqf8', form.current, 'QwlcPt-r8ENBM3S6Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      SetSent(!Sent)
  };

  return (
    <div>
      {Sent ?  <PopUp toggle={SetSent}/> : ""}
      <form ref={form} className={"contact-container"} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <br/>
        <br/>
        <label>Email</label>
        <input type="email" name="user_email" />
        <br/>
        <div className="message-container">
          <label>Message</label>
          <textarea name="message" />
        </div>
        <input type="submit" id="sendBtn" value="Send" href="#test" />
      </form>
    </div>
  );

  
};

export default ContactUs