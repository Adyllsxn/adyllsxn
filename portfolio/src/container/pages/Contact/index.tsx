import Footer from '@/components/layout/Footer';
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  return (
    <section className='sectionContact'>
      <div className='sectionContactContant'>
        <div className='layoutContainer'>

          <div className="contactContainer">
            <div className="contactInfo">
              <h2>Let’s work together?</h2>
              <p>
                Whether it’s a freelance project, an idea, or a professional opportunity, I’m ready to listen. Fill out the form below and I’ll get back to you as soon as possible.
              </p>

              <div className="contactDetails">
                <p><strong>Phone:</strong><br />(+244) 935 751 955</p>
                <p><strong>Email:</strong><br />domingos.nxscimento@gmail.com</p>
              </div>

              <div className="socialIcons">
                <a href="https://github.com/adyllsxn" target="_blank" rel="noopener noreferrer">
                  <div className="iconCircle"><FaGithub /></div>
                </a>
                <a href="https://linkedin.com/in/adyllsxn" target="_blank" rel="noopener noreferrer">
                  <div className="iconCircle"><FaLinkedinIn /></div>
                </a>
                <a href="https://x.com/adyllsxn" target="_blank" rel="noopener noreferrer">
                  <div className="iconCircle"><FaXTwitter /></div>
                </a>
                <a href="https://instagram.com/adyllsxn" target="_blank" rel="noopener noreferrer">
                  <div className="iconCircle"><FaInstagram /></div>
                </a>
              </div>
            </div>

            <form
              className="contactForm"
              action="https://formspree.io/f/mjkrqdko"
              method="POST">

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write message..."
                  required/>

                <button type="submit">SEND</button>
            </form>


          </div>

        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact;
