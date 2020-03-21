//jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route ,Switch ,Link ,NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component 
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

const notFoundPage = () => (
    <div>
        404-<NavLink to = "/">Go Home</NavLink>
    </div>
);

const Header = () => (
 
 <header>
     <h1>
         Expensify
     </h1>
     <NavLink to = "/" activeClassName = "is-active" exact = {true}>Dashboard</NavLink>
     <NavLink to = "/create" activeClassName = "is-active">Create Expense</NavLink>
     <NavLink to = "/edit" activeClassName = "is-active">Edit Expense</NavLink>
     <NavLink to = "/help" activeClassName = "is-active">Help</NavLink>
     
 </header>

);


const routes = (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component= {editExpensePage}/>
          <Route path="/help" component={helpPage} />
          <Route component={notFoundPage} />
      </Switch>
    </div>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('root'));
