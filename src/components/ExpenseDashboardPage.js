// jshint esversion : 6
// jshint esversion : 9

import React from 'react';
import ExpenseList  from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
       <ExpenseListFilters />
       <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;