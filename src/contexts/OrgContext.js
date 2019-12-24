import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const OrgContext = createContext();

const OrgContextProvider = ({ children }) => {
    const [items, setItems] = useState(
        localStorage.getItem('org_items') ? (
            [
                ...JSON.parse(
                    localStorage.getItem('org_items')
                )
            ]
        ) : (
                []
            )
    );

    const [budget, setBudget] = useState(
        JSON.parse(
            localStorage.getItem('org_budget')
        )
    );

    const addItem = (item) => {
        item.id = uuid();
        setItems([...items, item]);
    }

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }

    useEffect(() => {
        localStorage.setItem('org_items', JSON.stringify(items))
    }, [items]);

    const addBudget = (budget) => {
        setBudget(budget);
    }

    useEffect(() => {
        localStorage.setItem('org_budget', JSON.stringify(budget))
    }, [budget]);


    return (
        <OrgContext.Provider value={{ items, budget, addItem, deleteItem, addBudget }}>
            {children}
        </OrgContext.Provider>
    );
}

export default OrgContextProvider;