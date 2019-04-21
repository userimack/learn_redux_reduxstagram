import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// default data
const defaultState = {
	posts,
	comments,
};

// const enhancers = compose (
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );

const store = createStore(
	rootReducer,
	defaultState,
	// enhancers // old method to setup redux devtools
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // To setup redux devtools
);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
	module.hot.accept('./reducers/',() => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}
export default store;

