import { createStore } from 'redux';

const initialState = {
    count: 1,
    name: "Rudra",
    company: "Tripjack"
}

function reducer(state = initialState, action) { // Reducer Function
    if (action.type === 'count/increment') {
        return { ...state, count: state.count + 1 }
    }
    else if (action.type === 'count/decrement') {
        return { ...state, count: state.count - 1 }
    }
    else if (action.type === 'count/incrementBy') {
        return { ...state, count: state.count + (action.payload || 1) }
    }
    else if (action.type === 'count/decrementBy') {
        return { ...state, count: state.count - (action.payload || 1) }
    }
    return state;
}

const store = createStore(reducer)
// console.log(store)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({ type: "count/incrementBy", payload: 5 })

store.dispatch({ type: "count/decrement" })

store.dispatch({ type: "count/increment" })

store.dispatch({ type: "count/decrementBy", payload: 3 })
