import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ri5hqf8', form.current, 'QwlcPt-r8ENBM3S6Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} className={"contact-container"} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <br/>
      <div className="message-container">
        <label>Message</label>
        <textarea name="message" />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs