import moment from 'moment';
import {setStartDate , setEndDate, setTextFilter ,sortByDate , sortByAmount } from '../../actions/filters';

test('' , () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

test('' , () => {
     const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});


test('' , () => {
    const action = setTextFilter('Something in');
   expect(action).toEqual({
       type:'SET_TEXT_FILTER',
       text: 'Something in'
   });
});

test('' , () => {
    const action = setTextFilter();
   expect(action).toEqual({
       type:'SET_TEXT_FILTER',
       text: ''
   });
});

test('' , () => {
    const action = sortByAmount();
   expect(action).toEqual({
     type: 'SORT_BY_AMOUNT'
   });
});

test('' , () => {
    const action = sortByDate();
   expect(action).toEqual({
     type: 'SORT_BY_DATE'
   });
});




