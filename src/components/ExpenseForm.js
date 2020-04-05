// jshint esversion : 6
// jshint esversion : 9


import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

export default class ExpenseForm extends React.Component {
      state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calenderFocused : false,
        error: ''
      };
      onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
      };

      onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
      }

      onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
          this.setState(() => ({ amount }));
        }
        
      };

      onDateChange = (createdAt) => {
        if(createdAt){
          this.setState(() => ({ createdAt }));
        }
         
      }

      onFocusChange = ({focused}) => {
        this.setState(() => ({ calenderFocused: focused}));
      };

      onSubmit = (e) => {
        e.preventdefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'Please provide description and amount' }));
            console.log(error);
        } else {
          this.setState(() => ({ error: ''}));
          console.log("sub");
        }
      }; 

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.onSubmit}>
                    <input
                    type = 'text'
                    placeholder = 'Description'
                    autofocus
                    value = {this.state.description}
                    onChange = {this.onDescriptionChange}
                    />
                    <input
                    type = 'text'
                    placeholder = 'Amount' 
                    value = {this.state.amount}
                    onChange = {this.onAmountChange}
                    />
                    <SingleDatePicker
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calenderFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths= {1}
                    isOutsideRange={() => false}
                    />   
                    <textarea
                    placeholder = 'Add a note for your expense(optional)'
                    value = {this.state.note}
                    onChange = {this.onNoteChange}
                    />
                    <button>Add Expense</button>
                    

                </form>
            </div>
        )
    }
}

