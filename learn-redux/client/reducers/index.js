import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import verses from './verses';

const rootReducer = combineReducers(
  { posts, comments, verses, routing: routerReducer }
);

export default rootReducer;
