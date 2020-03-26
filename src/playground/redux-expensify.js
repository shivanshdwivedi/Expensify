// jshint esversion : 6
import {createStore , combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';


//Add_Expense

const add_expense = (
    {
        description = '',
        note= '',
        amount = 0,
        createdAt = 0     
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});


//Remove Expense
const remove_expense = (
    {
        id
    } = {}
    
)  => ({
    type: 'REMOVE_EXPENSE',
        id
});

 
//Edit Expense
const edit_expense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


 //Expenses Reducer
const expensesReducersDefaultState = [];
const expensesReducers = (state = expensesReducersDefaultState , action) => {
   switch(action.type){
       case 'ADD_EXPENSE':
       return [
           ...state,
           action.expense
       ];
       case 'REMOVE_EXPENSE':
       return state.filter(({ id }) => id !== action.id);
       case 'EDIT_EXPENSE':
       return state.map((expense) => { 

        if(expense.id == action.id){
            return {
                ...state,
                ...action.updates
            };
        }
        else{
            return expense;
        }

       });   
       default:
           return state;
   }
};


// Filters Reducer
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

// Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducers,
        filters: filterReducers
    })
);


store.subscribe(() => {

    console.log(store.getState());

});

const expenseOne = store.dispatch(add_expense({ description: 'Rent' , amount: 100 }));
const expenseTwo = store.dispatch(add_expense({ description: 'Kirana' , amount: 300 }));
store.dispatch(remove_expense({ id: expenseOne.expense.id}));
store.dispatch(edit_expense(expenseTwo.expense.id , {amount : 500}));

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
