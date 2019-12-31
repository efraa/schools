import React from 'react'
import { connect } from 'react-redux'

import { AlertContainer, AlertCard } from './Style'

const Alert = ({ alerts }) =>
  alerts[0] ? (
    <AlertContainer>
      {alerts.map(alert => (
        <AlertCard
          key={alert.id}
          success={alert.alertType === 200 ? true : false}
        >
          {alert.msg}
        </AlertCard>
      ))}
    </AlertContainer>
  ) : (
    false
  )

const mapStateToProps = state => ({
  alerts: state.alert,
})

export default connect(mapStateToProps)(Alert)
