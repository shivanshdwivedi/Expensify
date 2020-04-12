import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('' , () => {
    const state = filtersReducer(undefined , {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('' , () => {
    const state = filtersReducer(undefined , {type : 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test('' , () => {
    const currentState = {
        text : '' ,
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const state = filtersReducer(currentState , {type : 'SORT_BY_DATE'});
    expect(state.sortBy).toEqual('date');
});

test('' , () => {
    const startDate = moment();
    const action = {
        type : 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined , action);
    expect(state.startDate).toEqual(startDate);
});

test('' , () => {
    const text = 'this is my text';
    const action = {
        type : 'SET_TEXT_FILTER' , 
        text
    };
    const state = filtersReducer(undefined , action);
    expect(state.text).toEqual(text);
});

test('' , () => {
    const endDate = moment();
    const action = {
        type : 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined , action);
    expect(state.endDate).toEqual(endDate);
});