import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('' , () => {
    const wrapepr = shallow(<ExpenseForm />);
    expect(wrapepr).toMatchSnapshot(); 
});

test('' , () => {
    const wrapepr = shallow(<ExpenseForm expense = {expenses[1]} />);
    expect(wrapepr).toMatchSnapshot(); 
});

test('' , () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit' , {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});