import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [messageSent, setMessageSent] = useState(""); // State to track message sent status
  const [errorMessage, setErrorMessage] = useState(""); // State to track error message

  // Function to clear the messageSent state after a delay
  const clearMessageSent = () => {
    setMessageSent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that the form is not empty
    if (!toName || !fromName || !message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Your Email.js service ID, template ID, and user ID
    const serviceID = "service_fap45mt";
    const templateID = "template_1bou8cs";
    const userID = "eYS0b_75r6NNMKHVH";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          to_name: toName,
          from_name: fromName,
          message: message,
          reply_to: replyTo,
        },
        userID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setMessageSent("Message sent successfully.");
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
        setMessageSent(""); // Clear the success message
        setErrorMessage("An error occurred while sending the message.");
      });

    // Clear the form fields
    setToName("");
    setFromName("");
    setMessage("");
    setReplyTo("");
  };

  // Use useEffect to set a timer to clear the messageSent state after 10 seconds
  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(clearMessageSent, 10000); // 10 seconds in milliseconds
      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, [messageSent]);

  return (
    <section className="contact" id="contact">
      <div className="contact-holder">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="to_name"
              id="to_name"
              value={toName}
              onChange={(e) => setToName(e.target.value)}
              placeholder="Full Name"
              required // Add required attribute for validation
            />
            <input
              type="text"
              name="from_name"
              id="from_name"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              placeholder="Email Address"
              required // Add required attribute for validation
            />
          </div>

          <textarea
            cols="30"
            rows="7"
            placeholder="Your Message"
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required // Add required attribute for validation
          ></textarea>
          <input
            type="submit"
            id="button"
            value="Send Message"
            className="btn"
          />
          {messageSent && <p className="success-message">{messageSent}</p>}
        </form>

        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      </div>
    </section>
  );
};

export default Contact;
