import {useState, React, useEffect} from 'react'
import "./Cursor.css"
import {motion} from 'framer-motion'


function Cursor() {

    const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


  return (
    <div>
        <div id="blob"></div>
        <div id="blur"></div>
    </div>
  )
}

export default Cursor