import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useManageForm } from '../../../../hooks'
// Components
import { ForgotPassContainer } from '../../containers/ForgotPassContainer'
import { Field } from '../../../core/components/Forms/Field'
import { Button } from '../../../core/components/Forms/Button'
import { Spinner } from '../../../core/components/Spinner'
import { User, Picture, Name, UserName, Text } from './Style'
// Actions
import { forgotPassIsExpire, resetPassword } from '../../../../store/actions'

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
  const { resetPassword: resetPasswordData } = auth
  const user = resetPasswordData ? resetPasswordData.user : null

  return !user ? (
    <Spinner />
  ) : (
    <ForgotPassContainer title="Reset your password.">
      <form onSubmit={e => onSubmit(e)}>
        <div className="row">
          <div className="col-12">
            <User>
              <Picture image={user.picture.url} />
              <div>
                <Name>
                  {user.name} {user.lastname}
                </Name>
                <UserName>@{user.username}</UserName>
              </div>
            </User>

            <Text>
              Strong passwords include numbers, letters, and punctuation marks.
            </Text>
          </div>

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

          <div className="col-12 d-flex justify-content-end mt-4">
            <Button type="submit" disabled={!isValid}>
              Reset
            </Button>
          </div>
        </div>
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
