import React from 'react';

const TotalCount = ({ items, resetItems, budget }) => {
    if (items.length === 0) {
        return (
            <div className="total">
                <p>Items Count: 0</p>
                <p>Total Cost: 0</p>
            </div>
        )
    }
    let count = items.map(item => Number(item.count)).reduce((acc, curr) => acc + curr);
    let cost = items.map(item => item.cost * item.count).reduce((acc, curr) => acc + curr);

    let totalStyle = {
        backgroundColor: '#f4f4f4'
    }

    if (budget) {
        if (budget < cost) {
            totalStyle.backgroundColor = 'red';
        } else if (cost > budget * 0.9) {
            totalStyle.backgroundColor = 'yellow';
        } else {
            totalStyle.backgroundColor = 'green';
        }
    }

    return (
        <div className="total" style={totalStyle}>
            <button onClick={resetItems} className="resetBtn">Clear All</button>
            <p className="total_count">Items Count: {count}</p>
            <p className="total_cost">Total Cost: {cost}</p>
        </div>
    )
}

export default TotalCount;