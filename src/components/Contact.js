import React from 'react';

const ContactConfirmation = () => {
  alert('Thanks for your feedback!');
}

const ContactMe = () => {
  return (
    <div>
      <h1>How to contact me:</h1>
      <p>Youc an contact me by email of by leaving me comments here, or on my twitter:</p>
      <a href='https://twitter.com/OregonAsthmatic'>My Twitter</a>
      <br />
      <br />
      <input type='text'/>
      <button onClick={ContactConfirmation}>Say Hello!</button>
    </div>
  )
}

export default ContactMe;