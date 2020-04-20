// Export a stateless functional component
// description , amout , createdAt
import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListItem = ({description , amount , createdAt ,  id }) => (
    <div>
    <Link to ={`/edit/${id}`}>   
    <h3> {description} </h3>
    </Link>
        <p>
        {numeral(amount/100).format('Rs0,0.00')} 
        - 
        {moment(createdAt).format('MMMM Do , YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;