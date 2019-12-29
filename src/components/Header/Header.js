import React from 'react'
import { connect } from 'react-redux'
import { Container } from '../../containers/Container'
import Logo from '../../assets/images/logo.svg'
import { NavLink, Link } from 'react-router-dom'

const PublicHeader = () => (
  <Container>
    <div className="col">
      <Link to="/home" className="brand">
        <img src={Logo} alt="" />
      </Link>
    </div>
    <div className="col">
      <div className="header__content">
        <NavLink
          to="/auth"
          className="button button--outline"
          activeClassName="d-none"
        >
          Log In
        </NavLink>

        <NavLink to="/signup" className="button ml-2" activeClassName="d-none">
          Get Started
        </NavLink>
      </div>
    </div>
  </Container>
)

const PrivateHeader = () => (
  <Container>
    <div className="col">
      <Link to="/home" className="brand">
        <img src={Logo} alt="" />
      </Link>
    </div>
    <div className="col"></div>
  </Container>
)

const Header = ({ isAuth }) => {
  return (
    <div className="header__wrapper">
      <header className="header fade">
        {isAuth ? <PrivateHeader /> : <PublicHeader />}
      </header>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {})(Header)
