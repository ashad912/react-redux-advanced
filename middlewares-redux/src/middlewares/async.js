export default ({ dispatch }) => next => async action => {
    // Check to see if the action 
    // has a promise on its 'payload' property
    // If it does, then wait for it to resolve
    // If it does not, teh send the action on to the
    // next middleware

    //debugger;

    if(!action.payload || !action.payload.then){
        return next(action)
    }  
    
    // We want to wait for the promise to resolve
    // (get its data) and then create a new action
    // with that data and dispatch it

    // action.payload.then((res) => {
    //     const newAction = { ...action, payload: res}
    //     dispatch(newAction)
    // })

    const res = await action.payload
    dispatch({...action, payload: res})
}

        
    

// Before refactor
// export default ({ dispatch }) => {
//     return (next) => {
//         return (action) => {
            
//         }
//     }
// }