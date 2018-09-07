
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from '../data/messages';
import comments from '../data/contacts';

const rootReducer = combineReducers({ contacts, messages, routing: routerReducer });

export default rootReducer;
