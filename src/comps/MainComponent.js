import React, { useContext } from 'react';
import { OrgContext } from '../contexts/OrgContext';

import Budget from './Budget';
import Display from './Display';
import TotalCount from './TotalCount';
import AddItem from './AddItem';

const MainComponent = () => {
    const { items, budget, addItem, deleteItem, addBudget } = useContext(OrgContext);

    return (
        <div className="MainComponent">
            <Budget budget={budget} addBudget={addBudget} />
            <TotalCount items={items} budget={budget} />
            <AddItem addItem={addItem} />
            <Display items={items} deleteItem={deleteItem} />
        </div>
    );
}

export default MainComponent;