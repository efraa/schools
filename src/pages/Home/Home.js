import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="mb-5 d-flex justify-content-center align-items-center">
      <Link to="/logout" className="button button--secoundary">
        Logout
      </Link>
    </div>
  )
}

export default HomePage
