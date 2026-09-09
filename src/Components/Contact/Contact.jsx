import { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [formState, setFormState] = useState('idle')
  const [formMessage, setFormMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormState('sending')
    setFormMessage('')
    const formData = new FormData(event.target);

    formData.append("access_key", "f3f8c841-84de-4c7d-a527-59f40407a79e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((response) => response.json());

      if (res?.success !== true) {
        const failureMessage = typeof res?.message === 'string' && res.message.trim()
          ? res.message
          : 'Message could not be sent. Please email me directly.'
        throw new Error(failureMessage)
      }

      setFormState('success')
      const successMessage = typeof res?.message === 'string' && res.message.trim()
        ? res.message
        : 'Thanks - your message has been sent.'
      setFormMessage(successMessage)
      event.target.reset()
    } catch (error) {
      setFormState('error')
      setFormMessage(error instanceof Error ? error.message : 'Message could not be sent. Please email me directly.')
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let&apos;s talk</h1>
            <p>Feel free to contact me for collaborative projects! I&apos;m available to help bring your ideas to life with my skills in programming and development.</p>
            <div className="contact-details">
              <a className="contact-detail" href="mailto:anirbandas64237@gmail.com">
                    <img src={mail_icon} alt="" />
                    <p>anirbandas64237@gmail.com</p>
              </a>
              <a className="contact-detail" href="tel:+917439596392">
                    <img src={call_icon} alt="" />
                    <p>+91 7439 596 392</p>
              </a>
              <a className="contact-detail" href="https://www.linkedin.com/in/anirban64237" target="_blank" rel="noopener noreferrer">
                <img src={location_icon} alt="" />
                <p>LinkedIn / anirban64237</p>
              </a>
              <a className="contact-detail" href="https://github.com/Anirban642" target="_blank" rel="noopener noreferrer">
                    <img src={location_icon} alt="" />
                <p>GitHub / Anirban642</p>
              </a>
              <a className="contact-detail" href="https://adportfolio-zeta.vercel.app" target="_blank" rel="noopener noreferrer">
                <img src={location_icon} alt="" />
                <p>Current portfolio</p>
              </a>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="contact-name">Your Name</label>
            <input id="contact-name" type="text" placeholder='Enter Your Name' name='name' required />
            <label htmlFor="contact-email">Your Email</label>
            <input id="contact-email" type="email" placeholder='Enter Your Email' name='email' required />
            <label htmlFor="contact-message">Write Your message here</label>
            <textarea id="contact-message" name="message" rows={8} placeholder='Enter Your message' required></textarea>
            <button type='submit' className='contact-submit' disabled={formState === 'sending'}>{formState === 'sending' ? 'Sending...' : 'Send message'}</button>
            <p className={`contact-form-message ${formState}`} aria-live='polite'>{formMessage}</p>
        </form>
      </div>
    </div>
  )
}

export default Contact
