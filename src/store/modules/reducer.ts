import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory();
import { reducerWithInitialState } from "typescript-fsa-reducers";

export interface State {
    count: number;
}

const INITIAL_STATE: State = {
    count: 0
};

export const increment = actionCreator<string>("INCREMENT");
export const decrement = actionCreator<string>("DECREMENT");

export const reducer = reducerWithInitialState(INITIAL_STATE)
    .case(increment, state => ({ ...state, count: state.count + 1}))
    .case(decrement, state => ({ ...state, count: state.count - 1}))