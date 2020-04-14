// jshint esversion :6

import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('' , () => {
    const filters = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
   const result = selectExpenses(expenses , filters);
   expect(result).toEqual([expenses[2] , expenses[1]]);
});

test('' , () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:moment(0),
        endDate:undefined
    };
    const result = selectExpenses(expenses , filters);
    expect(result).toEqual([expenses[2] , expenses[0]]);
});

test('' , () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate:moment(0)
    };
    const result = selectExpenses(expenses , filters);
    expect(result).toEqual([expenses[0] , expenses[1]]);
});

test('' , () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpenses(expenses , filters);
    expect(result).toEqual([expenses[2] , expenses[0] , expenses[1]]);
});

test('' , () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpenses(expenses , filters);
    expect(result).toEqual([expenses[2] , expenses[0] , expenses[1]]);
});





