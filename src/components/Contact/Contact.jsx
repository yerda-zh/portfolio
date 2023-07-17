import { useState, useRef } from 'react';
import {ContactContainer, ContactImg, GetInTouchContainer, ContactA, ContactB, GetInTouchDivider} from './contact.styles';
import '../../animations/animation.css';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const {ref: leftRef, inView: isLeftVisible} = useInView();
  const {ref: conRef, inView: isConVisible} = useInView();
  
  const form = useRef();

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState('');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText('Sending...');

    emailjs.sendForm('service_3w7ra7g', 'template_nljkrhp', form.current, 'qjwE2usd5VuYlT6S6')
      .then((result) => {
          setStatus(result.status);
          setFormDetails(formInitialDetails);
          setButtonText('Send');
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <ContactContainer id="contact">
      <ContactImg ref={leftRef} className={`${isLeftVisible ? 'slide-right' : ''}`}>
        <img src={"/images/contact-img.svg"} alt="contact" />
      </ContactImg>

      <GetInTouchContainer ref={conRef} className={`${isConVisible ? 'slide-left' : ''}`}>
        <h2>Get In Touch</h2>
        <GetInTouchDivider />

        <form ref={form} onSubmit={sendEmail}>
          <ContactA>
            <input
              type="text"
              value={formDetails.firstName}
              placeholder="First Name"
              onChange={(event) =>
                onFormUpdate("firstName", event.target.value)
              }
              name="user_firstname" 
              required
            />
            <input
              type="text"
              value={formDetails.lastName}
              placeholder="Last Name"
              onChange={(event) => onFormUpdate("lastName", event.target.value)}
              name="user_lastname"
            />
            <input
              type="email"
              value={formDetails.email}
              placeholder="Email Address"
              onChange={(event) => onFormUpdate("email", event.target.value)}
              required
              name="user_email"
            />
            <input
              type="text"
              value={formDetails.topic}
              placeholder="Topic"
              onChange={(event) => onFormUpdate("topic", event.target.value)}
              name="user_topic"
            />
          </ContactA>
          <ContactB>
            <textarea
              type="text"
              value={formDetails.message}
              placeholder="Message"
              onChange={(event) => onFormUpdate("message", event.target.value)}
              required
              name="message" 
            />
          </ContactB>
          <button type="submit">
            <span>{buttonText}</span>
          </button>
          {status !== '' && (
            <p>
              {status === 200 ? 'Message sent successfully' : 'Something went wrong, please try again later.'}
            </p>
          )}
        </form>
      </GetInTouchContainer>
    </ContactContainer>
  );
}

export default Contact;