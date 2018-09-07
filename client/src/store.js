import { createStore } from 'redux';

//Import the root reducer
import rootReducer from './reducers/index';

import contacts from './data/contacts';
import messages from './data/messages';

//Create an object for the default data
const defaultState = {
    profile
};

const store = createStore(rootReducer, defaultState);

export default store;
