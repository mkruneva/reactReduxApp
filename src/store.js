import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers' // /index

const initialState = {};

const middleware = [thunk];

// createStore(reducer F, [preloadedState], [enhancer] F);
const store = createStore(
  rootReducer, 
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   // used for Chrome Redux 
  ) 
);

export default store;
