import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import commentReducer from './CommentReducer.js';
import picturesReducer from './picturesReducer.js';
import optionsReducer from './optionsReducer.js';
import ordersReducer from './ordersReducer.js';

const reducers = combineReducers({
  user: userReducer,
  comments: commentReducer,
  pictures: picturesReducer,
  pictures: picturesReducer,
  options: optionsReducer,
  orders: ordersReducer
});

export default reducers;
