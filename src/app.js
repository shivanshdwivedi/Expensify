//jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './Firebase/firebase';

const store = configureStore();
// store.dispatch(addExpense({description: 'water bill' , amount: 4500 }));
// store.dispatch(addExpense({description: 'gas bill' , createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent' , amount: 10500 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses , state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
      <AppRouter />
    </Provider>

);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx , document.getElementById('root'));
});


