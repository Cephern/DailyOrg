import React from 'react';

const Display = ({ items, deleteItem, increment, decrement }) => {
    if (items.length === 0) {
        return (
            <div className="display_empty">
                <p>Your Shopping List is Empty, wow</p>
            </div>

        )
    } else {
        let itemList = items.map(item => {
            return (
                <div className="display_item" key={item.id}>
                    <p className="item_name">{item.name}</p>
                    <p className="item_cost">{item.cost}р</p>
                    <p className="item_count">{item.count}</p>
                    <div className="item_btns">
                        <button className="btn_inc" onClick={() => increment(item.id)} >+</button>
                        <button className="btn_dec" onClick={() => decrement(item.id)} >-</button>
                        <button className="btn_delete" onClick={() => deleteItem(item.id)} >Delete</button>
                    </div>
                </div>
            )
        });

        return (
            <div className="display-items">
                {itemList}
            </div>
        )
    }
}

export default Display;