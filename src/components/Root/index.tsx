import React from 'react'
import {connect} from 'react-redux'
import IStore from '../../store/storeTypes'
import {User} from '../../store/storeTypes'

interface OwnProps {
    id: number
    name: string
}

interface StateProps {
    count: number
}

const Root: React.SFC<OwnProps & StateProps> = props => {
    return (
        <div>
            <div className="asd">{props.id}</div>
            <div className="asd">{props.name}</div>
        </div>
    )
}

const mapStateToProps = (state: IStore): User => {
    return {
        id: state.user.id,
        name: state.user.name
    }
}

export default connect(mapStateToProps)(Root)