import React, { useEffect, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
// Actions
import { getProfile } from '../../../core/store/actions/profile'
// Utils
import { Roles } from '../../../../contexts/utils/Roles'
import { Spinner } from '../../../core/components/Spinner'
// Components
const SchoolProfile = lazy(() => import('../SchoolViews/Profile'))
const NotFoundPage = lazy(() => import('../../../core/views/NotFoundPage'))
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
