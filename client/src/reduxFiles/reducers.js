export const numberOfClicksReducers = (state = JSON.parse(localStorage.getItem('numberOfClicks') || '[]' ), action) => {
    
    const {type} = action;

    switch(type) {
        case 'COUNTER_BUTTON_CLICKED':
            return state + action.payload.amount;
        case 'LESS_COUNTER_BUTTON_CLICKED':
            return state - action.payload.amount;
        default:
            return state; 
    }
    
}