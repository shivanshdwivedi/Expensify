//jshint esversion : 6

import { addExpense , editExpense , removeExpense} from '../../actions/expenses';

test('should setup remove expense action object' , () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('' , () => {
    const action = editExpense( '123abc' , { note : 'new note value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    });
});

test('' , () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt:1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('' , () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
                description: '',
                 amount: 0,
               createdAt:0,
                 note: ''
            
        }
    });
});