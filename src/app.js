//jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboars component 
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component 
    </div>
);

const editExpensePage = () => (
    <div>
        This is from my edit expense component 
    </div>
);

const helpPage = () => (
    <div>
        This is from my help page component 
    </div>
);



const routes = (
    <BrowserRouter>
      <div>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component= {editExpensePage}/>
          <Route path="/help" component={helpPage} />
      </div>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('root'));
