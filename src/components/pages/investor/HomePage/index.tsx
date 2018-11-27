import React from 'react'
import checkToken from '../../../../helpers/checkToken'
import {connect} from 'react-redux'
import {increment, decrement} from '../../../../store/modules/reducer'
import {State} from '../../../../store/modules/reducer'
import IStore from '../../../../store/storeTypes'

interface OwnProps {
    path: string
}

interface StateProps {
    count: number
}

interface DispatchProps {
    increment(): void
    decrement(): void
}

class HomePage extends React.Component<OwnProps & StateProps & DispatchProps> {
    componentDidMount(): void {
        checkToken()
    }
    public render(): JSX.Element {
        return (
            <div>
                <div>You are logged!</div>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state: IStore): State => {
    return {
        count: state.reducer.count
    }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        increment: () => dispatch(increment('', null)),
        decrement: () => dispatch(decrement('', null))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)