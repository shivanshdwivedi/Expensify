import ExpenseListItem from '../../components/ExpenseListItem';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test('' , () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
})