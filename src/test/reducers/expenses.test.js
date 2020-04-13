// jshint esversion : 6
// jshint esversion : 9


import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('' , () => {
    const state = expensesReducer(undefined , {type : '@@INIT'});
    expect(state).toEqual([]);
});

test('' , () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[1].id
    };
    const state = expensesReducer(expenses , action);
    expect(state).toEqual([expenses[0] , expenses[2]]);
});

test('' , () => {
    const expense = {
        id: '109',
        description : 'New Expense',
        note: '',
        amount: 1200,
        createdAt : 25220,

    }
    const action = {
        type : 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses , action);
    expect(state).toEqual([...expenses ,expense]);
});

test('' , () => {
    const amount = 100;
    const action = {
        type: 'EDIT_EXPENSE',
        id : expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses , action);
    expect(state[1].amount).toBe(amount);
});

test('' , () => {
    const amount = 100;
    const action = {
        type: 'EDIT_EXPENSE',
        id : '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses , action);
    expect(state).toEqual(expenses);
});