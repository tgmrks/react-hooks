import React, { useReducer } from 'react';

function Reducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    return(
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    ); 
}
export default Reducer;