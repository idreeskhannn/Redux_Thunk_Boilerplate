import actionType from "../constant/constant";

const addCounter1 = () =>{
    return (dispatch) =>{
dispatch(
    {
        type : actionType.ADD_COUNTER,
        // payload,
    }
)
    }
};

const muinusCounter = () =>{
    return (dispatch) =>{
dispatch(
    {
        type : actionType.MINUS_COUNTER ,
        // payload,
    }
)
    }
}

export {addCounter1,muinusCounter}