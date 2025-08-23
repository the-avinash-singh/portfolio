import React from 'react'
import spinner from "../assets/spinner.svg"
import "../stylesheets/Spinner.css"

const Spinner = () => {
  return (
       <div className='text-center spinner position'>
        <img src={spinner} alt="loading..." />
      </div>
  )
}

export default Spinner;