
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import contacts from '../data/contacts';
import messages from '../data/messages';

const rootReducer = combineReducers({ contacts, messages, routing: routerReducer });

export default rootReducer;
