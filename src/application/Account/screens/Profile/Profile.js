import React, { useEffect, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
// Actions
import { getProfile } from '../../../../store/actions/profile'
// Utils
import { Roles } from '../../../../utils/Roles'
import { Spinner } from '../../../core/components/Spinner'
// Components
const SchoolProfile = lazy(() => import('../School/Profile'))
const NotFoundPage = lazy(() => import('../../../core/screens/NotFoundPage'))
const AccountDisabled = lazy(() => import('../AccountDisabled'))

const UserToProfile = ({ user }) => {
  if (user && user.loading) {
    if (user.name && !user.isActive) return <AccountDisabled />

    if (user.role)
      switch (user.role) {
        case Roles.School:
          return <SchoolProfile user={user} />
        case Roles.Student:
          return <SchoolProfile user={user} />
        case Roles.Teacher:
          return <SchoolProfile user={user} />
        default:
          return <NotFoundPage />
      }
  }

  return <Spinner />
}

const Profile = ({ getProfile, match, profile }) => {
  useEffect(() => {
    getProfile(match.params.username)
  }, [getProfile, match])

  return (
    <Suspense fallback={<Spinner />}>
      <UserToProfile user={profile} />
    </Suspense>
  )
}

const mapStateToProps = state => ({
  profile: state.profile,
})

export default connect(mapStateToProps, { getProfile })(Profile)
