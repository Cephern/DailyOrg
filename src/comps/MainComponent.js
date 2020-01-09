import React, { useContext } from 'react';
import { OrgContext } from '../contexts/OrgContext';

import Budget from './Budget';
import Display from './Display';
import TotalCount from './TotalCount';
import AddItem from './AddItem';

const MainComponent = () => {
    const { items, increment, decrement, resetItems, budget, addItem, deleteItem, addBudget } = useContext(OrgContext);

    return (
        <div className="MainComponent">
            <Budget budget={budget} addBudget={addBudget} />
            <TotalCount items={items} resetItems={resetItems} budget={budget} />
            <AddItem addItem={addItem} />
            <Display items={items} increment={increment} decrement={decrement} deleteItem={deleteItem} />
        </div>
    );
}

export default MainComponent;