import React from 'react'
import { connect } from 'react-redux'

const Alert = ({ alerts, selector = 'alert' }) =>
  alerts && (
    <div className={`${selector}__container`}>
      {alerts.map(alert => (
        <div
          key={alert.id}
          className={
            alert.alertType === 200
              ? `${selector} ${selector}--success up`
              : `${selector} ${selector}--warning up`
          }
        >
          <p>{alert.msg}</p>
        </div>
      ))}
    </div>
  )

const mapStateToProps = state => ({
  alerts: state.alert,
})

export default connect(mapStateToProps)(Alert)
