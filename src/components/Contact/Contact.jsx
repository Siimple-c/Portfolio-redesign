import './contact.scss';
import {LuTwitter} from 'react-icons/lu'
import {FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section id= "contact">
      <h1 className="contact-header">GET IN TOUCH</h1>
      <div className="form-container">
        <form method="get" onSubmit={handleSubmit} className="form-block">
          <label className="label" htmlFor="">
            <input value={name} onChange={e => setName(e.target.value)} placeholder="NAME" className="textinput"/>
          </label>
          <label className="label"  htmlFor="">
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="EMAIL ADDRESS '&OR' TEL"  className="textinput"/>
          </label>
          <label className="label" htmlFor="">
            <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="MESSAGE" className="textinput ta"/>
          </label>
          <button type="submit" className="submit-btn">SEND</button>
        </form>
        <div>
          <div className="contact-details">
            <a href="mailto:chuka.odunna@outlook.com" className="mail">chuka.odunna@outlook.com</a>
            <a href="tel:+2348125470663" className="num">+2348125470663</a>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com/knowcode_" target="_blank" rel="noreferrer"  className="social-icon"><LuTwitter/></a>
            <a href="https://tinyurl.com/chuka-linkedin" target="_blank" rel="noreferrer"  className="social-icon"><FaLinkedinIn/></a>
            <a href="https://www.instagram.com/siimple_c/" target="_blank" rel="noreferrer"  className="social-icon"><FaInstagram/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
