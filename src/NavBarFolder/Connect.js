import React from 'react';
import './Connect.css'


function Connect() {
  return (
  <section id="connect">
    <h1> Connect With Me!</h1>
    <form name="contact" method="POST" data-netlify="true" netlify>
        <p>
            <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
            <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
            <label>Your Role: <select name="role[]" multiple>
            <option value="Recruiter">Recruiter</option>
            <option value="Client">Client</option>
            <option value="Hello">No role, just saying hi!</option>
            </select></label>
        </p>
        <p>
            <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
   
  </section>
  );
}

export default Connect;