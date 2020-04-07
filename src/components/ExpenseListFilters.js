// jshint esversion : 6
// jshint esversion : 9

import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, setEndDate, setStartDate } from '../actions/filters';
import { sortByDate } from '../actions/filters';
import { sortByAmount , startDate ,endDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component{
    state = {
        calenderFocused: null
    };
    onDatesChange = ({startDate , endDate}) => {
     this.props.dispatch(setStartDate(startDate));
     this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calenderFocused) => {
    this.setState(() => ({calenderFocused}));
    }
    render(){
        return(
            <div>
                <input type = 'text' value = {this.props.filters.text} onChange = {(e) => {
                    props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select 
                    value = {this.props.filters.sortBy}  
                    onChange = {(e) =>{
                    if(e.target.value === 'date'){
                        props.dispatch(sortByDate());
                    }else if(e.target.value === 'amount'){
                     props.dispatch(sortByAmount());
                    }
                     }}
                >
                     <option value = 'amount'>Amount</option>
                    <option value = 'date'>Date</option>
                </select>
              <DateRangePicker 
                  startDate = {this.props.filters.startDate}
                  endDate = {this.props.filters.endDate}
                  onDatesChange= {this.onDatesChange}
                  focusedInput = {this.state.calenderFocused}
                  onFocusChange = {this.onFocusChange}
                  showClearDates = {true}
                  numberOfMonths = {1}
                  isOutsideRange = {() => false}
              />

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);