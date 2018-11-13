import React from 'react'
import { pin } from '../../modules/pin'
import { connect } from 'react-redux'

const investor = props => {
  return (
    <div>
      <div onClick={props.pin}>
        {props.isPinned ? 'isPinned' : 'notIsPinned'}
      </div>
    </div>
  )
}

export default connect(
  state => {
    return {
      isPinned: state.pin.isPinned,
    }
  },
  { pin }
)(investor)
