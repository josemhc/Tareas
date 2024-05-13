export const TodoReducer=(initialState=[], action)=>{
    switch(action.type){
        case '[TODO] ADD TODO ':
            return []
        default:
            return initialState;

    }
}