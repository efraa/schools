import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { ForgotPassContainer } from '../../containers/ForgotPassContainer'

const CheckEmail = memo(({ emailSended }) =>
  !emailSended ? (
    <Redirect to="/forgot-password" />
  ) : (
    <ForgotPassContainer title="Check your email.">
      <p className="check-email__text mt-4">
        We've sent an email to reset your password.
      </p>
      <p className="check-email__text mb-4">
        If you don't see the email, check other places it might be, like your
        junk, spam, etc.
      </p>

      <p className="check-email__small mb-4">
        <small>
          If you've already read this message <br /> you can close this window.
        </small>
      </p>

      <Link to="/forgot-password" className="check-email__link">
        <b> I didn't receive the email, try again. </b>
      </Link>
    </ForgotPassContainer>
  )
)

const mapStateToProps = state => ({
  emailSended: state.auth.emailSended,
})

export default connect(mapStateToProps, {})(CheckEmail)
