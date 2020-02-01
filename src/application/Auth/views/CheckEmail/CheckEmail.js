import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// Components
import { ForgotPassContainer } from '../../containers/ForgotPassContainer'
import { Text, Small, Button } from './Style'

const CheckEmail = memo(({ emailSended }) =>
  !emailSended ? (
    <Redirect to="/forgot-password" />
  ) : (
    <ForgotPassContainer title="Check your email.">
      <Text className="mt-4">We've sent an email to reset your password.</Text>
      <Text className="mb-4">
        If you don't see the email, check other places it might be, like your
        junk, spam, etc.
      </Text>

      <Small>
        <small>
          If you've already read this message <br /> you can close this window.
        </small>
      </Small>

      <Button to="/forgot-password">
        <b> I didn't receive the email, try again. </b>
      </Button>
    </ForgotPassContainer>
  )
)

const mapStateToProps = state => ({
  emailSended: state.auth.emailSended,
})

export default connect(mapStateToProps, {})(CheckEmail)
