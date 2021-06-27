import React from 'react'
import "./Contact.scss"
import { motion } from "framer-motion"

function Contact() {
  return (

    <motion.div className="Contact"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}>
      <div className="Contact-top-container">
        <h1>do you have some questions?</h1>
      </div>

      <div className="Contact-card">
        <input type="text" placeholder="Enter your name..." />
        <input type="text" placeholder="Enter your email..." />
        <textarea name="" id="" cols="30" rows="10" placeholder="Enter your comment..."></textarea>
        <button type="submit">submit</button>
      </div>
    </motion.div>
  )
}

export default Contact
