import React, {useState} from 'react'

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''})
    const {name, email, message} = formState


    function handleFormSubmit(e) {
        e.preventDefault()
    }

    return (
        <section>
        <h1>Contact Me</h1>
        <form className='contact-form' id='contact-form' onSubmit={handleFormSubmit} >
            <div className='form-element-container'>
                <label htmlFor='name'>Name: </label>
                <input className='form-input' type="text" name='name' defaultValue={name}/>
            </div>
            <div className='form-element-container'>
                <label htmlFor='email'>Email Address: </label>
                <input className='form-input' type="email"  name='email' defaultValue={email}/>
            </div>
            <div className='form-element-container'>
                <label htmlFor='message'>Message: </label>
                <textarea className='form-input' name='message'  rows="5" defaultValue={message}/>
            </div>
           
            <button className='form-submit-btn' type='submit'>Submit</button>
        </form>
    </section>
    )
}


export default Contact