// jshint esversion : 6
// jshint esversion : 9


import React from 'react';

export default class ExpenseForm extends React.Component {
      state = {
        description: '',
        note: ''
      };
      onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
      };

      onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
      }

    render() {
        return (
            <div>
                Expense Form
                <form>
                    <input
                    type = 'text'
                    placeholder = 'Description'
                    autofocus
                    value = {this.state.description}
                    onChange = {this.onDescriptionChange}
                    />
                    <input
                    type = 'number'
                    placeholder = 'Amount' 
                    />
                    <div>
                    <textarea
                    placeholder = 'Add a note for your expense(optional)'
                    value = {this.state.note}
                    onChange = {this.onNoteChange}
                    />
                    </div>
                    
                    <div>
                    <button>Add Expense</button>
                    </div>
                    

                </form>
            </div>
        )
    }
}