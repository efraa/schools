import React from 'react'
import { connect } from 'react-redux'
import { Container } from '../../containers/Container'
import Logo from '../../../../images/logo.png'

import {
  HeaderNode,
  HeaderWrapper,
  HeaderBrand,
  HeaderContent,
  HeaderButton,
} from './Style'

const PublicHeader = () => (
  <Container>
    <div className="col">
      <HeaderBrand to="/home">
        <img src={Logo} alt="" />
      </HeaderBrand>
    </div>
    <div className="col">
      <HeaderContent>
        <HeaderButton
          to="/auth"
          className="button button--outline"
          activeClassName="d-none"
        >
          Log In
        </HeaderButton>

        <HeaderButton
          to="/signup"
          className="button ml-2"
          activeClassName="d-none"
        >
          Get Started
        </HeaderButton>
      </HeaderContent>
    </div>
  </Container>
)

const PrivateHeader = () => (
  <Container>
    <div className="col">
      <HeaderBrand to="/home">
        <img src={Logo} alt="" />
      </HeaderBrand>
    </div>
    <div className="col"></div>
  </Container>
)

const Header = ({ isAuth }) => {
  return (
    <HeaderWrapper>
      <HeaderNode>{isAuth ? <PrivateHeader /> : <PublicHeader />}</HeaderNode>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {})(Header)
