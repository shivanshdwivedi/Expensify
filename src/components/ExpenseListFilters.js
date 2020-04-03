// jshint esversion : 6
// jshint esversion : 9

import React from 'react';
import {connect} from 'react-redux';

const ExpenseListFilters = (props) => {
    return(
        <div>
            <input type = 'text' value = {props.filters.text}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);