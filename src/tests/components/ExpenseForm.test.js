import React from 'react';
import {shallow} from 'enzyme';
import moment from'moment';
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

test('' , () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change' , {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('' , () => {
    const value = 'New Note value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change' , {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('' , () => {
    const value = '23.5';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change' , {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('' , () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change' , {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test('' , () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense ={expenses[0]} onSubmit = {onSubmitSpy}/>);
    wrapper.find('form').simulate('submit' , { 
    preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('' , () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});
