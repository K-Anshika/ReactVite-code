//  use reducer to manage complex component state

import React,{useReducer} from "react";

const initialState ={
    count:0  };

function reducerCount(state,action){
    switch(action.type){
        case "INCREMENT":
            return{
                count: state.count + 1
               }
        case "DECREMENT":
            return{
                count: state.count - 1
            }
        case "RESET":
            return{
                count: 0
            }
        default:
            return state;
    }
}

export function Counter() {
 const [state, dispatch] = useReducer(
        reducerCount,
        initialState
    );

    return (
        <div>
            <h2>Count: {state.count}</h2>

            <button
                onClick={() => dispatch({ type: "INCREMENT" })}
            >
                +
            </button>

            <button
                onClick={() => dispatch({ type: "DECREMENT" })}
            >
                -
            </button>

            <button
                onClick={() => dispatch({ type: "RESET" })}
            >
                Reset
            </button>
        </div>
    );
}
