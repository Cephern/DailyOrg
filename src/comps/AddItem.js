import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ name, cost, count: 1 });
        setName('');
        setCost('');
    }

    return (
        <form className="addItem_form" onSubmit={handleSubmit}>
            <h2>Add Item</h2>
            <div className="addItem_inputs">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => {
                    setName(e.target.value);
                }} />
                <label htmlFor="cost">Cost:</label>
                <input type="number" name="cost" id="cost" value={cost} onChange={(e) => {
                    setCost(Number(e.target.value));
                }} />
            </div>
            <input type="submit" value="submit" />
        </form>
    );
}


export default AddItem;