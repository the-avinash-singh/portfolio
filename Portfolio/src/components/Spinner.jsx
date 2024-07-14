import React from 'react'
import spinner from "../assets/spinner.svg"
import "../stylesheets/Spinner.css"

const Spinner = () => {
  return (
    <div>
       <div className='text-center spinner position'>
        <img src={spinner} alt="loading..." />
      </div>
    </div>
  )
}

export default Spinner;