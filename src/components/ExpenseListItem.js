// Export a stateless functional component
// description , amout , createdAt
import React from 'react';
import {connect} from 'react-redux';

const ExpenseListItem = () => (
    <div>
        <h1>
        Items Are:
        {props.expenses.description}
        {props.filters.description}
        </h1>

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListItem)