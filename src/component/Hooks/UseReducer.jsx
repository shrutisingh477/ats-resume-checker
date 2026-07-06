import React, {useReducer}  from 'react'

const Reducer = (state , action) => {
  if (action.type === "Incr"){
    state = state + 1;
  }
     if (state > 0 && action.type === "Decr"){
    state = state - 1;
  }
  return state;
}
const UseReducer = () => {
     const initialData = 0;
        const [state , dispatch] = useReducer(Reducer , initialData);
  return (
      <>
  <div className="center_div">
   <p>{state}</p>
   <div class="button2" onClick = {() => dispatch({type : "Incr"})}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Incr
   </div>
    <div class="button2" onClick = {() => dispatch({type : "Decr"})}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Decr
   </div>
   </div>
  </>
  )
}

export default UseReducer