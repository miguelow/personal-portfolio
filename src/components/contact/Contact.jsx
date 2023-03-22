import React from "react";
import "./Contact.css";
import {motion} from 'framer-motion'

 
function Contact() {
 return (
   <section className="contact section" id="contact">
     
 
     <motion.div 
      className="contact__container container grid"
      whileHover={{ scale: 1.1 }}
      >
      <div>
      <h2 className="section__title">Get in touch</h2>
      </div>
       <div className="contact__content">
         <div className="contact__card">
           <i className="bx bx-mail-send contact__card-icon"></i>
           <h3 className="contact__card-title">Mail</h3>
           <span className="contact__card-data">miguel.owd@gmail.com</span>
           <a
             target="_blank"
             rel="noreferrer"
             href="https://mail.google.com/mail/?view=cm&fs=1&to=miguel.owd@gmail.com"
             className="contact__button" >
             contact
             <i className="bx bx-right-arrow-alt contact__button-icon"></i>
           </a>
         </div>
         
       </div>
     </motion.div>
   </section>
 );
}
 
export default Contact;