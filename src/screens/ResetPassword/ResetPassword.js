import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useManageForm } from '../../hooks'
// Components
import { ForgotPassContainer } from '../../containers/ForgotPassContainer'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
import { Spinner } from '../../components/Spinner'
import { Col, Row } from 'reactstrap'
// Actions
import { forgotPassIsExpire, resetPassword } from '../../store/actions'

const ResetPassword = ({
  forgotPassIsExpire,
  resetPassword,
  history,
  match,
  auth,
}) => {
  useEffect(() => {
    forgotPassIsExpire(match.params.token, history)
  }, [forgotPassIsExpire, match, history])

  const { onSubmit, onChange, isValid, validator, data } = useManageForm({
    fields: {
      password: '',
      newPassword: '',
    },
    connect: resetPassword,
    moreData: {
      token: match.params.token,
      history,
    },
  })
  const { password, newPassword } = data
  const { resetPassword: check } = auth

  return !check && !check.status ? (
    <Spinner />
  ) : (
    <ForgotPassContainer title="Reset your password.">
      <form onSubmit={e => onSubmit(e)}>
        <Row>
          <Field
            type="password"
            placeholder="Type your new password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          >
            {validator.message('password', password, 'required|min:6')}
          </Field>

          <Field
            type="password"
            placeholder="Type your new password one more time"
            name="newPassword"
            value={newPassword}
            onChange={e => onChange(e)}
          >
            {validator.message('newPassword', newPassword, 'required|min:6')}
          </Field>
          <Col xs={12} className="d-flex justify-content-end mt-4">
            <Button type="submit" disabled={!isValid}>
              Reset
            </Button>
          </Col>
        </Row>
      </form>
    </ForgotPassContainer>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { forgotPassIsExpire, resetPassword })(
  ResetPassword
)
