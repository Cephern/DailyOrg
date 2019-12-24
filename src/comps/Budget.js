import React, { useState, useContext } from 'react';
import { OrgContext } from '../contexts/OrgContext';

const Budget = () => {
    const { budget, addBudget } = useContext(OrgContext);
    const [budgetInner, setBudget] = useState('');

    const handleChange = (e) => {
        setBudget(Number(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBudget(budgetInner);
        setBudget('');
    }

    return (
        <div className="budget">
            <form className="budget_form" onSubmit={handleSubmit} >
                <label htmlFor="budget">Set Budget: </label>
                <input type="number" name="budget" value={budgetInner} onChange={handleChange} />
                <input type="submit" value="submit" />
            </form>
            <h2 className="budget_h2">Budget: {budget}</h2>
        </div>
    )
}

export default Budget;