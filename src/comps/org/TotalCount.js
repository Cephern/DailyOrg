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
        <div style={totalStyle} className="total">
            <p>Items Count: {count}</p>
            <p>Total Cost: {cost}</p>
        </div>
    )
}

let totalStyle = {
    margin: '0.5em 0',
    background: '#eee',
    borderRadius: '15px',
    boxShadow: '5px 5px 8px #000',
    padding: '0.5em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

export default TotalCount;