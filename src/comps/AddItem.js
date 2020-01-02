import React, { useState } from 'react';
import AutoComplete from './AutoComplete';

const AddItem = ({ addItem }) => {

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [height, setHeight] = useState('0px');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ name, cost, count: 1 });
        setName('');
        setCost('');
    }

    return (
        <form autoComplete='off' className="addItem_form" onSubmit={handleSubmit} onClick={
            (e) => {
                if (e.target.className !== 'suggestion') {
                    setHeight('0px');
                }
            }
        }>
            <h2>Add Item</h2>
            <div className="addItem_inputs">
                <label htmlFor="name">Name:</label>
                <div className="">
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required={true} />

                    <AutoComplete name={name} setName={setName} height={height} setHeight={setHeight} />

                </div>

                <label htmlFor="cost">Cost:</label>
                <input type="number" name="cost" id="cost" value={cost} onChange={(e) => {
                    setCost(Number(e.target.value));
                }} required={true} />
            </div>
            <input type="submit" value="submit" />
        </form >
    );
}


export default AddItem;