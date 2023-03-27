import React from 'react';
import './Connect.css'


function Connect() {
  return (
  <section id="connect">
    <h1> Connect With Me!</h1>
    <form name="contact" method="post" data-netlify="true" >
        <input type="hidden" name="form-name" value="contact" />
        <p>
            <label>Your Name: <input type="text" name="name" required/></label>
        </p>
        <p>
            <label>Your Email: <input type="email" name="email" required /></label>
        </p>
        <p>
            <label>Your Role: <select name="role[]" multiple>
            <option value="Recruiter">Recruiter</option>
            <option value="Client">Client</option>
            <option value="Hello">No role, just saying hi!</option>
            </select></label>
        </p>
        <p>
            <label>Message: <textarea name="message" required></textarea></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
   
  </section>
  );
}

export default Connect;