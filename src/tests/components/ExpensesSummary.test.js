// jshint esversion : 6

import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('' , () => {
const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {235} />);
expect(wrapper).toMatchSnapshot();
});

test('' , () => {
const wrapper = shallow(<ExpensesSummary expenseCount = {23} expensesTotal = {23512340987} />);
expect(wrapper).toMatchSnapshot();
});
