import React from 'react'
import { Container } from '../../containers/Container'
import Logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <Container>
          <div className="col">
            <div className="brand">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="col"></div>
        </Container>
      </header>
    </div>
  )
}

export default Header
