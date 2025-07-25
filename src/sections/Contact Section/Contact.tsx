import React, { useRef } from 'react';
import './Contact.css';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import SlideIn from '../SlideIn/SlideIn';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
      .sendForm(
        'service_hxkvzf3',
        'template_fsdrz2j',
        form.current,
        '8pt53fY9hlQ5Qv6ri' 
      )
      .then(
        () => {
        toast.success('Message sent successfully!');
        form.current?.reset();
        },
        (error) => {
        toast.error('Failed to send message. Please try again later.');
        console.error(error);
        }
      );
    }
  };

  return (
    <div className="contact-section">
      <ToastContainer />
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <SlideIn>
          <p className="headline">Let's Ignite Ideas Together! 🚀</p>
          <p className="subhead">
            Reach out and kickstart a conversation that fuels creativity and collaboration.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>miracleesan7@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhone />
            <span>+234 | 913-0930-145</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Lagos, Nigeria</span>
          </div>

            <div className="contact-icons">
            <a  className="icon"
              href="https://www.linkedin.com/in/miracle-esan-57067a202/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://x.com/MiracleOlaolu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)">
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
              </svg>
            </a>
            <a 
              href="https://github.com/MiracleDev0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="icon" />
            </a>
            </div>
            </SlideIn>
        </div>
        <SlideIn direction='right' className="contact-right">
        <div >
          <h3 className="form-title">Ready to Connect?</h3>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>
              Full name
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Your Email" required />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell me about your project" required />
            </label>
            <button type="submit">Send Message</button>
          </form>
          
        </div>
        </SlideIn>
      </div>
    </div>
  );
};

export default Contact;
