// jshint esversion : 6


import {createStore , combineReducers } from 'redux';

const expensesReducersDefaultState = [];
const expensesReducers = (state = expensesReducersDefaultState , action) => {
   switch(action.type){
       default:
           return state;
   }
};

const filterReducersDefaultState = {
    text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
};
const filterReducers = (state = filterReducersDefaultState , action) => {
   switch(action.type){
       default:
           return state;
   }
};


const store = createStore(
    combineReducers({
        expenses: expensesReducers,
        filters: filterReducers
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'hcidbdbc',
        description: 'January Rent',
        note: 'This is my final payment for Jan',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};