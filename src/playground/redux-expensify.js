// jshint esversion : 6


import {createStore , combineReducers } from 'redux';

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