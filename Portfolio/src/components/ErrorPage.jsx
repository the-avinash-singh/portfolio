import React from 'react'
import { NavLink } from 'react-router-dom'
import "../stylesheets/errorPage.css"

const ErrorPage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound text-center px-2">
            <h1 className='notfound-404'>404</h1>
        <h2>we are sorry, page not found!</h2>
        <p className='mb-5'>The page your are looking for might have been
            removed or is temporarily unailable.
        </p>
        <NavLink to="/"> Back to Home</NavLink>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
