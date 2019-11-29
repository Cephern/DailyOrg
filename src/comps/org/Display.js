import React from 'react';

const Display = ({ items, deleteItem, increment, decrement }) => {
    if (items.length === 0) {
        return (
            <div className="itemList">
                <p>Your Shopping List is Empty, wow</p>
            </div>

        )
    } else {
        let itemList = items.map(item => {
            return (
                <div style={itemStyle} className="item" key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.cost}р</p>
                    <p>{item.count}</p>
                    <div style={btnDivStyle}>
                        <button className="inc" onClick={() => increment(item.id)} >+</button>
                        <button className="dec" onClick={() => decrement(item.id)} >-</button>
                        <button onClick={() => deleteItem(item.id)} >Delete</button>
                    </div>
                </div>
            )
        });

        return (
            <div className="itemList">
                {itemList}
            </div>
        )
    }
}

let itemStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    border: '2px solid #ccc',
    borderRadius: '10px',
    margin: '0.5em 0',
    fontSize: '1.2em',
    fontWeight: '600',
    boxShadow: '2px 2px 4px #000'
}

let btnDivStyle = {
    display: 'flex',
    width: '30%',
    justifyContent: 'space-evenly'
}

export default Display;