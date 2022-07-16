import React, {useState} from 'react'

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''})

    const [errorMessage, setErrorMessage ]= useState('')
    const {name, email, message} = formState

    function handleChange(e) {
        if(e.target.name === "email") {
            const isValid = validateEmail(e.target.value)
            if(!isValid) {
                setErrorMessage('email is invalid!')
            }
            else {
                setErrorMessage('')
            }
        }
        else if(!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required!`)
        } else {
            setErrorMessage('')
        }
        console.log(errorMessage)
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function validateEmail(email) {
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(email.match(validEmail)) {
            return true
        }
        else {
            return false
        }
    }
    function handleFormSubmit(e) {
        e.preventDefault()
    }

    return (
        <section>
        <h2 className='section-header'>Contact Me</h2>
        <form className='contact-form' id='contact-form' onSubmit={handleFormSubmit} >
            <div className='form-element-container'>
                <label htmlFor='name'>Name: </label>
                <input className='form-input' type="text" name='name' onBlur={handleChange} defaultValue={name}/>
            </div>
            <div className='form-element-container'>
                <label htmlFor='email'>Email Address: </label>
                <input className='form-input' type="email"  name='email' onBlur={handleChange} defaultValue={email}/>
            </div>
            <div className='form-element-container'>
                <label htmlFor='message'>Message: </label>
                <textarea className='form-input' name='message' onBlur={handleChange}  rows="5" defaultValue={message}/>
            </div>
           {errorMessage && (
            <div>
                <p className='error-text'>{errorMessage}</p>
            </div>
           )}
            <button className='form-submit-btn' type='submit'>Submit</button>
        </form>
    </section>
    )
}


export default Contact