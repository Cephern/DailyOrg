import React, { useState } from 'react';

const Budget = ({ budget, addBudget }) => {
    const [budgetInner, setBudget] = useState('');

    const handleChange = (e) => {
        setBudget(e.target.value);
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