import {createStore, combineReducers} from 'redux';
import { numberOfClicksReducers } from './reducers';

const rootReducer = combineReducers({
    numberOfClicks: numberOfClicksReducers,
});

export const store = createStore(rootReducer);
