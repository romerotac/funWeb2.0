export const counteButtonClicked = amount =>({
    type: 'COUNTER_BUTTON_CLICKED',
    payload: {amount},
});

export const lessCounterButtonClicked = amount => ({
    type: 'LESS_COUNTER_BUTTON_CLICKED',
    payload:{amount}
})