"use client";

import * as React from "react";

import { useState } from "react";

function ContactMe() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == "" || email == "" || message == "") return;

    console.log("Submitting");
  };

  return (
    <form
      id="#contact"
      onSubmit={handleSubmit}
      className="wrapper max-w-3xl pb-[var(--vertical-section-offset)] space-y-2"
    >
      <h1 className="heading lg:text-4xl mx-auto">Contact Me</h1>
      <div className="flex flex-col space-y-2 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-2">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="user name"
          className="input__field"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="input__field"
        />
      </div>
      <textarea
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="enter message..."
        className="input__field rounded-[var(--border-radius)] w-full"
      />
      <button className="btn block">submit</button>
    </form>
  );
}

export default ContactMe;
