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