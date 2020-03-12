import React from 'react'
import { connect } from 'react-redux'
import { useManageForm } from '../../hooks'
import { Row, Col } from 'reactstrap'
// Components
import { Spinner } from '../../components/Spinner'
import { ForgotPassContainer } from '../../containers/ForgotPassContainer'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
// Actions
import { forgotPassword } from '../../store/actions'
import { Link } from 'react-router-dom'
// Styles
import { Common } from '../../styles'

const ForgotPassword = ({ forgotPassword, forgotPassIsLoading, history }) => {
  const { onSubmit, onChange, isValid, validator, data } = useManageForm({
    fields: {
      email: '',
    },
    connect: forgotPassword,
    moreData: history,
  })
  const { email } = data

  return (
    <ForgotPassContainer title="Find your Schools account.">
      {forgotPassIsLoading ? <Spinner /> : ''}
      <form onSubmit={e => onSubmit(e)}>
        <Row>
          <Col xs={12} className="mb-lg-3">
            <Common.Marked>
              Enter the email address associated with your account.
            </Common.Marked>
          </Col>
          <Field
            placeholder="youraccount@smail.com"
            value={email}
            name="email"
            type="email"
            onChange={e => onChange(e)}
          >
            {validator.message('email', email, 'required|email')}
          </Field>

          <Col xs={12} className="d-flex justify-content-end mt-5">
            <Button as={Link} to="/auth" outline="true" className="mr-3">
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid}>
              Find account
            </Button>
          </Col>
        </Row>
      </form>
    </ForgotPassContainer>
  )
}

const mapStateToProps = state => ({
  forgotPassIsLoading: state.auth.forgotPassIsLoading,
  emailSended: state.auth.emailSended,
})

export default connect(mapStateToProps, { forgotPassword })(ForgotPassword)
