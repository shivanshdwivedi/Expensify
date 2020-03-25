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

const setCount = ({setBy = 0} = {}) => ({
    type: 'RESET',
    setBy
});

// const decrementCount = ({decrementBy = 1} = {}) => ({
//     type: 'DECREMENT',
//     decrementBy
// });



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
                count: action.count
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

store.dispatch(setCount({setBY : 0}));

store.dispatch(decrementCount({decrementBy : 5}));

store.dispatch({
    type: 'SET',
    count: 101
});

