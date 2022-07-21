import React, { useState } from 'react'
import './Form.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Form = () => {

    const form = useRef();
    const [btnValue,setBtnValue]=useState('Send Message')
    const sendEmail = (e) => {
        e.preventDefault();
        setBtnValue("Sending...");
        emailjs.sendForm('service_03jfjjj', 'template_xrg5l8b', form.current, 'n9aCwhUFWSQlJLfgy')
          .then(() => {
            setEnteredName('');
            setEnteredEmail('');
            setEnteredMessage('');
            setBtnValue("Send Message");
            alert("Email Sent Successfully")
          }, (error) => {
              alert(error.text);
          });
    };

    
    const [enteredName,setEnteredName]=useState('');
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredMessage,setEnteredMessage]=useState('');
    
    // const submitHander=(e)=>{
    //     e.preventDefault();
    //     alert('Name='+enteredName +"\n Email=" +enteredEmail +"\n Message=" + enteredMessage);
    //     setEnteredName('');
    //     setEnteredEmail('');
    //     setEnteredMessage('');
    // }

  return (
    <form className='form' onSubmit={sendEmail}   ref={form}>
     {/* <form className='form' action='' method='post'  onSubmit={submitHander}> */}
        <div className="form__input">
            <input type='text' name='name' value={enteredName} onChange={e=>setEnteredName(e.target.value)} placeholder='Your Name' required />
        </div>
        <div className="form__input">
            <input type='email'name='email'  value={enteredEmail} onChange={e=>setEnteredEmail(e.target.value)} placeholder='Your Email' required/>
        </div>
        <div className="form__input">
            <textarea rows='5' name='message'  value={enteredMessage} onChange={e=>setEnteredMessage(e.target.value)} placeholder='Message' required></textarea>
        </div>
        <div >
            <input type='submit' className="form__btn" value={btnValue} />
        </div>

    </form>
  )
}

export default Form
