// jshint esversion : 6
// jshint esversion : 9

import { createStore , combineReducers , applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__|| compose;

// Store creation

export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
      );
      return store;
};