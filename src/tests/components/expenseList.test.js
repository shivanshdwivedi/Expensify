import {ExpenseList} from '../../components/ExpenseList';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test('' , () => {
    const wrapper = shallow(<ExpenseList expenses = {expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('' , () => {
    const wrapper = shallow(<ExpenseList expenses = {[]} />);
    expect(wrapper).toMatchSnapshot();
});