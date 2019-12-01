import React from 'react';

const TotalCount = ({ items }) => {
    if (items.length === 0) {
        return (
            <div className="empty">
                <p>Items Count: 0</p>
                <p>Total Cost: 0</p>
            </div>
        )
    }
    let count = items.map(item => Number(item.count)).reduce((acc, curr) => acc + curr);
    let cost = items.map(item => item.cost * item.count).reduce((acc, curr) => acc + curr);

    return (
        <div className="total">
            <p className="total_count">Items Count: {count}</p>
            <p className="total_cost">Total Cost: {cost}</p>
        </div>
    )
}

export default TotalCount;