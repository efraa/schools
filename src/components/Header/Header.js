import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../../images/logo.png'

import {
  HeaderNode,
  HeaderWrapper,
  HeaderBrand,
  HeaderContent,
  HeaderButton,
} from './Style'

const PublicHeader = () => (
  <Container>
    <Row>
      <Col>
        <HeaderBrand to="/home">
          <img src={Logo} alt="" />
        </HeaderBrand>
      </Col>
      <Col>
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
      </Col>
    </Row>
  </Container>
)

const PrivateHeader = () => (
  <Container>
    <Col>
      <HeaderBrand to="/home">
        <img src={Logo} alt="" />
      </HeaderBrand>
    </Col>
    <Col></Col>
  </Container>
)

const Header = ({ isAuth }) => (
  <HeaderWrapper>
    <HeaderNode>{isAuth ? <PrivateHeader /> : <PublicHeader />}</HeaderNode>
  </HeaderWrapper>
)

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {})(Header)
