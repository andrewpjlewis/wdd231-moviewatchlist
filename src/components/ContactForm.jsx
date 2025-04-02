import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [email, setEmail] = useState(searchParams.get("email") || "");
  const [reason, setReason] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setReason("General Inquiry");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={submitted ? "fade-out" : ""}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Reason for Contact:
          <select value={reason} onChange={(e) => setReason(e.target.value)}>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Report a Bug">Report a Bug</option>
            <option value="Feature Request">Feature Request</option>
          </select>
        </label>

        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p className="confirmation-message">Message sent successfully!</p>}
    </div>
  );
};

export default ContactForm;