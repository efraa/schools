import React from 'react'
import { connect } from 'react-redux'
import { useManageForm } from '../../hooks'
// Components
import { Spinner } from '../../../core/components/Spinner'
import { ForgotPassContainer } from '../../../core/containers/ForgotPassContainer'
import { Field } from '../../../core/components/Forms/Field'
import { Button } from '../../../core/components/Forms/Button'
// Actions
import { forgotPassword } from '../../../core/store/actions'
import { Link } from 'react-router-dom'
// Styles
import { Common } from '../../../core/styles'

const ForgotPasswordPage = ({
  forgotPassword,
  forgotPassIsLoading,
  history,
}) => {
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
        <div className="row">
          <div className="col-12 mb-lg-3">
            <Common.Marked>
              Enter the email address associated with your account.
            </Common.Marked>
          </div>

          <Field
            placeholder="youraccount@smail.com"
            value={email}
            name="email"
            type="email"
            onChange={e => onChange(e)}
          >
            {validator.message('email', email, 'required|email')}
          </Field>

          <div className="col-12 d-flex justify-content-end mt-5">
            <Button as={Link} to="/auth" outline="true" className="mr-3">
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid}>
              Find account
            </Button>
          </div>
        </div>
      </form>
    </ForgotPassContainer>
  )
}

const mapStateToProps = state => ({
  forgotPassIsLoading: state.auth.forgotPassIsLoading,
  emailSended: state.auth.emailSended,
})

export default connect(mapStateToProps, { forgotPassword })(ForgotPasswordPage)
