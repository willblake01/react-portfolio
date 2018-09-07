import { createStore } from 'redux';

//Import the root reducer
import rootReducer from './reducers/index';

import profile from './reducers/contactMe';

//Create an object for the default data
const defaultState = {
    profile
};

const store = createStore(rootReducer, defaultState);

export default store;
