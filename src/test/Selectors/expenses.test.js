// jshint esversion :6

import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
const expenses = [{
    id: 1,
    description : 'gum',
    note:'',
    amount: 195,
    createdAt: 0
} , {
    id: 2,
    description : 'Pencil',
    note:'',
    amount: 19500,
    createdAt: moment(0).subtract(4 , 'days').valueOf()
}, {
    id: 3,
    description : 'Earser',
    note:'',
    amount: 100,
    createdAt: moment(0).add(4 , 'days').valueOf()
}];

test('' , () => {
    const filters = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
   const result = selectExpenses(expenses , filters )
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





