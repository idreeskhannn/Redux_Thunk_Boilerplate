import actionType from "../../constant/constant";

const INITIALSTATE = {
    counter: 0
}
const counterReducer = (state = INITIALSTATE, action) => {
    
    switch (action.type) {
        case actionType.ADD_COUNTER:
            return {
                ...state,
                counter: ++state.counter
            };
        case actionType.MINUS_COUNTER:
            return {
                ...state,
                counter: --state.counter
            };
            
            default:
                return{
                ...state 
                }
    }
};

export {counterReducer}