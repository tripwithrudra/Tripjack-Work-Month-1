## Understanding Redux

```javascript
let originalState = {
    count: 0,
    name: "Rudra",
}

let prevState = originalState

function increment() {
    state.count += 1 // Mutating state (modifying directly)


    // Not direct change (Non Mutating State)
    state =  {
        ...state,
        count: state.count + 1
    }
}
increment()
```


### No need to manually check the state again and again:
```javascript
// Reducer Function
function reducer(state = initialState, action) { 
    if (action.type === 'count/increment') {
        return { ...state, count: state.count + 1 }
    }
    else if (action.type === 'count/decrement') {
        return { ...state, count: state.count - 1 }
    }
    else if (action.type === 'count/incrementBy') {
        return {
            { ...state, count: state.count + (action.payload || 1) }
        }
    }
    else if (action.type === 'count/decrementBy') {
        return { ...state, count: state.count - (action.payload || 1) }
    }
    return state;
}
```

### Creating a store using createStore()
```javascript
import { createStore } from 'redux';

const store = createStore(reducer)

// Subscribe is called whenever actions get dispatched
store.subscribe(() => {
    console.log(store.getState())
})

// Action Dispatching:
// dispatch calls reducer function behind the scenes

store.dispatch({ type: "count/incrementBy", payload: 5 }) 
// -> {count: 6, name: 'Rudra'}

store.dispatch({ type: "count/decrement" })
// -> {count: 5, name: 'Rudra'}

store.dispatch({ type: "count/increment" })
// -> {count: 6, name: 'Rudra'}

store.dispatch({ type: "count/decrementBy", payload: 3 })
// -> {count: 3, name: 'Rudra'}
```