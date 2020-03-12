import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => (
  <div className="mb-5 d-flex justify-content-center align-items-center mt-5">
    <Link to="/logout" className="button button--secoundary">
      Logout
    </Link>
  </div>
)

export default Home
