import React from 'react'
import { connect } from 'react-redux'
import { useManageForm } from '../../hooks'
// Components
import { Spinner } from '../../components/Spinner'
import { ForgotPassContainer } from '../../containers/ForgotPassContainer'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
// Actions
import { forgotPassword } from '../../store/actions'
import { Link } from 'react-router-dom'

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
            <p className="marked">Enter your email address.</p>
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
            <Link className="button button--outline mr-3" to="/auth">
              Cancel
            </Link>
            <Button
              text="Find account"
              type="submit"
              classes={!isValid ? 'disabled' : ''}
            />
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
