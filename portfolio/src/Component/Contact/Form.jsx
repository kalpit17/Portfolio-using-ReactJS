import React, { useState } from 'react'
import './Form.css'
const Form = () => {

    const [enteredName,setEnteredName]=useState('');
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredMessage,setEnteredMessage]=useState('');

    const submitHander=(e)=>{
        e.preventDefault();
        console.log('submited');
    }
  return (
    <form action='' className='form' onSubmit={submitHander}>
        <div className="form__input">
            <input type='text' name='Name' value={enteredName} onChange={e=>setEnteredName(e.target.value)} placeholder='Your Name'/>
        </div>
        <div className="form__input">
            <input type='email'name='Email'  value={enteredEmail} onChange={e=>setEnteredEmail(e.target.value)} placeholder='Your Email'/>
        </div>
        <div className="form__input">
            <textarea rows='5' name='Message'  value={enteredMessage} onChange={e=>setEnteredMessage(e.target.value)} placeholder='Message'></textarea>
        </div>
        <div >
            <button type='submit' className="form__btn">Send Message &#x279C;</button>
        </div>

    </form>
  )
}

export default Form
