import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = targhet.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!userName) {
            setErrorMessage('Must have username');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Must have valid email');
            return;
        }
        if (!checkMessage(message)) {
            setErrorMessage('Must send a message');
            return;
        }
        alert(`Good Evening ${userName}!`);
        setUserName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div>
            <h4>Hello {userName}</h4>
            <form className="message-form">
                <input
                  name="userName"
                  value={userName}
                  type="text"
                  onChange={handleInputChange}
                  placeholder="username"
                 />
                <input
                  name="email"
                  value={email}
                  type="email"
                  onChange={handleInputChange}
                  placeholder="email"
                 />
                <input
                  name="message"
                  value={message}
                  type="message"
                  onChange={handleInputChange}
                  placeholder="message"
                 />
                <button type="button" onClick={handleFormSubmit}></button>
                
            </form>
            {errorMessage && (
                <div>
                    <p className="error-message">{errorMessage}</p>
                </div>
            )};
        </div>
    )
}