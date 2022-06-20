import './Contact.css';
import Nav from "./Nav";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './Footer';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  function submit(e) {
    e.preventDefault();
    if (name.length > 2) {
      emailjs.send("service_eo0w3jn", "template_iw0wn4c", {
        'from_name' : name,
        'from_email' : email,
        'from_subject' : subject,
        'from_message' : message
      }, 'Lz5vAAid0E-nhKKeZ');

      setName('')
      setEmail('')
      setSubject('')
      setMessage('')

      toast("Votre message a été envoyé avec succès", {
        duration: 5000,
        position: "bottom-left",
        icon: "✅"
      })
} else {
      setError("Nom est obligatoire")
    }
  }

  function change(e) {
    const name = e.target.name;

    if (name === "name") {
      setName(e.target.value)
    } else if(name === "email") {
      setEmail(e.target.value)
    } else if(name === "subject") {
      setSubject(e.target.value)
    } else {
      setMessage(e.target.value)
    }
  }


  return (
    <>
        <div className="bg-nav">
           <Nav/>
        </div>
        <Toaster/>
        <div className='contact'>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-1">
                    <hr className='hr-contact' />
                  </div>
                  <div className="col-md-3">
                    <h4 className='say-hello'>Say hello <img src="img/main-pic-1.png" alt="" width={30} /></h4>
                  </div>
                </div>
                <div>
                  <h2 className='lets-work'>Let’s Work Together.</h2>
                </div>
                <div className='disscuss mt-5'>
                    <p className='fs-5'>I’d love to meet up with you to discuss your venture, and potential collaborations.</p>
                </div>
              </div>
              <div className="col-md-6">
                  <div className="pic-5"><img src="img/main-pic-5.png" alt="" width={70} /></div>
                  <div className="pic-3"><img src="img/figures-3.png" alt="" width="200px" /></div>
                  <div className="pic-7"><img src="img/main-pic-7.png" alt="" width="300px" /></div>
                  <div className='pic-6'><img src="img/main-pic-6.png" alt="" /></div>
                  <div className='pic-4'><img src="img/figures-4.png" alt="" /></div>
              </div>
            </div>
            <div className='box-contact-me'>
            <div className="row ">
              <div className="col-md-6">
                <img className='contact-me' src="img/image_5803446_20201127_ob_f411d5_email-gif.gif" alt="" width={600} />
              </div>
              <div className="col-md-6 shadow tabl-contact">
                <form onSubmit={submit}>
                  <div className="form-group mb-3">
                    <label className='fs-5 nom' htmlFor="name">Nom complet</label>
                    <input type="text" className="form-control" value={name} id="name" name="name" onChange={change}/>
                    <span className="text-danger">{error}</span>
                  </div>
                  <div className="form-group mb-3">
                    <label className='fs-5 adresse' htmlFor="email">Adresse e-mail</label>
                    <input type="email" className="form-control" value={email} id="email" name="email" onChange={change}/>
                  </div>
                  <div className="form-group mb-3">
                    <label className='fs-5 sujet' htmlFor="subject">Sujet</label>
                    <input type="text" className="form-control" value={subject} id="subject" name="subject" onChange={change}/>
                    </div>
                  <div className="form-group mb-3">
                    <label className='fs-5 message' htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="6" value={message} className="form-control" onChange={change}></textarea>
                  </div>
                  <div className="mb-4 mt-5">
                    <button className="text-light w-100 fs-5 rounded">Envoyer le message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}
