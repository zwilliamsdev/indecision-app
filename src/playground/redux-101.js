import {createStore} from 'redux';

// Destructuring for increment count
// ({incrementBy = 1}) destructure first object and set default value to 1
// = {} if no object is passed in then set an empty object
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 0}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. reducers are pure functions. output only determined by input.
//    Not influenced by scope inside or outside of reducer.
// 2. Never change state or action
const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    };
};

const store = createStore(countReducer);

// Action - object that gets sent to store
// increment, decrement, reset

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// incremenet
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(decrementCount());

store.dispatch(setCount({count: 5000}));

store.dispatch(resetCount());