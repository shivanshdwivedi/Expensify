import moment from 'moment';
import {setStartDate , setEndDate } from '../../actions/filters';

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
