import React from 'react'
import checkToken from '../../../../helpers/checkToken'
import { connect } from 'react-redux'
import { decrement, increment } from '../../../../store/modules/counter'
import { default as IStore, ICounter } from '../../../../store/storeTypes'
import { asyncIncrement } from '../../../../store/modules/data'

interface OwnProps {
  path: string
}

interface StateProps {
  count: number
  isLoading: boolean
  isLoaded: boolean
}

interface DispatchProps {
  increment(count?: number): void
  decrement(count?: number): void
  asyncIncrement(): void
}

class HomePage extends React.Component<OwnProps & StateProps & DispatchProps> {
  public componentDidMount(): void {
    checkToken()
    this.props.asyncIncrement()
  }

  public render(): React.ReactNode {
    return (
      <div>
        <div>You are logged!</div>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.increment()}>increment</button>
        <button onClick={() => this.props.decrement()}>decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state: IStore): StateProps => {
  return {
    count: state.counter.count,
    isLoading: state.data.isLoading,
    isLoaded: state.data.isLoaded,
  }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    increment: (count = 0) => dispatch(increment({ count })),
    decrement: (count = 0) => dispatch(decrement({ count })),
    asyncIncrement: () => dispatch(asyncIncrement.action()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
