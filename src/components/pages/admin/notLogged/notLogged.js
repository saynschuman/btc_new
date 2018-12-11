import React from 'react'
import { connect } from 'react-redux'
import WongData from '../../components/commmon/WrongData/WrongData'

const notLogged = props => {
  return (
    <div>
      {props.success !== null && <WongData success={props.success} />}
      {props.investorSuccess !== null && props.investorSuccess !== true && (
        <WongData success={props.investorSuccess} />
      )}
      {props.investorSuccess !== null && props.investorSuccess && window.location.reload()}
    </div>
  )
}

export default connect(state => {
  return {
    success: state.authData.success,
    investorSuccess: state.authData.investorSuccess
  }
})(notLogged)
