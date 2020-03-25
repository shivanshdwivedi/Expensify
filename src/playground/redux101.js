// jshint esversion : 6

import {createStore} from 'redux';

//Action generators -- functions that are created at one place and then return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
     type: 'INCREMENT',
     incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({resetBy = 0} = {}) => ({
    type: 'RESET',
    resetBy
});

const setCount = ({setBy}) => ({
    type: 'SET',
    setBy
});



const store = createStore((state = {count: 0} , action) => {
     
    switch(action.type){
        case'INCREMENT':
        return{
            count: state.count + action.incrementBy
        };    

        case'DECREMENT':  
        return{
            count: state.count - action.decrementBy
        };

        case'RESET':
        return{
            count: 0
        };

        case 'SET':
            return{
                count: action.setBy
            }

        default:
            return state;
    }

}); 

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount({resetBY : 0}));

store.dispatch(decrementCount({decrementBy : 5}));

store.dispatch(setCount({setBy: 101}));

