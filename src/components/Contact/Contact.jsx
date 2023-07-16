import { useState } from 'react';
import {ContactContainer, ContactImg, GetInTouchContainer, ContactA, ContactB, GetInTouchDivider} from './contact.styles';
import '../../animations/animation.css';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const {ref: leftRef, inView: isLeftVisible} = useInView();
  const {ref: conRef, inView: isConVisible} = useInView();

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent the page from reloading when the user submits the form
    setButtonText('Sending...');
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText('Send');
    let result = await response.json();
    setFormDetails(formInitialDetails);
    
    if (result.code === 200) {
      setStatus({success: true, message: 'Message sent successfully'});
    } else {
      setStatus({success: false, message: 'Something went wrong, please try again later.'})
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactImg ref={leftRef} className={`${isLeftVisible ? 'slide-right' : ''}`}>
        <img src={"/images/contact-img.svg"} alt="contact" />
      </ContactImg>

      <GetInTouchContainer ref={conRef} className={`${isConVisible ? 'slide-left' : ''}`}>
        <h2>Get In Touch</h2>
        <GetInTouchDivider />

        <form onSubmit={handleSubmit}>
          <ContactA>
            <input
              type="text"
              value={formDetails.firstName}
              placeholder="First Name"
              onChange={(event) =>
                onFormUpdate("firstName", event.target.value)
              }
              required
            />
            <input
              type="text"
              value={formDetails.lastName}
              placeholder="Last Name"
              onChange={(event) => onFormUpdate("lastName", event.target.value)}
            />
            <input
              type="email"
              value={formDetails.email}
              placeholder="Email Address"
              onChange={(event) => onFormUpdate("email", event.target.value)}
              required
            />
            <input
              type="text"
              value={formDetails.topic}
              placeholder="Topic"
              onChange={(event) => onFormUpdate("topic", event.target.value)}
            />
          </ContactA>
          <ContactB>
            <textarea
              type="text"
              value={formDetails.message}
              placeholder="Message"
              onChange={(event) => onFormUpdate("message", event.target.value)}
              required
            />
          </ContactB>
          <button type="submit">
            <span>{buttonText}</span>
          </button>
          {status.message && (
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          )}
        </form>
      </GetInTouchContainer>
    </ContactContainer>
  );
}

export default Contact;