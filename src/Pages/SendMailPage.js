import React from "react";
import { useState } from "react";
const SendMailPage = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const handleSubjectValue = (event) => {
    setSubject(event.target.value);
  };
  const handleMessageValue = (event) => {
    setMessage(event.target.value);
  };
  const handleEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(message, subject);
    setMessage("");
    setSubject("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter the Email"
        width={200}
        value={email}
        onChange={handleEmailValue}
      />
      <input
        type="text"
        placeholder="Enter the Subject"
        width={200}
        value={subject}
        onChange={handleSubjectValue}
      />
      <input
        type="text"
        placeholder="Enter the Message"
        width={200}
        value={message}
        onChange={handleMessageValue}
      />
      <button onClick={handleSubmit}>Send</button>
    </>
  );
};

export default SendMailPage;
