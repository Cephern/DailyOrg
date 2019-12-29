import React, { useState, useContext } from 'react';
import AutoComplete from './AutoComplete';
import { AutoCompleteContext } from '../contexts/AutoCompleteContext';

const AddItem = ({ addItem }) => {
    const { suggestions, focus, setFocus } = useContext(AutoCompleteContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ name, cost, count: 1 });
        setName('');
        setCost('');
    }

    return (
        <form autoComplete='off' className="addItem_form" onSubmit={handleSubmit}>
            <h2>Add Item</h2>
            <div className="addItem_inputs">
                <label htmlFor="name">Name:</label>
                <input type="text" list="suggestions" name="name" id="name" value={name} onChange={(e) => {
                    setName(e.target.value);
                }} onFocus={(e) => setFocus(true)} onBlur={(e) => setTimeout(() => setFocus(false), 500)} required={true} />

                <AutoComplete name={name} setName={setName} suggestions={suggestions} focus={focus} setFocus={setFocus} />

                <label htmlFor="cost">Cost:</label>
                <input type="number" name="cost" id="cost" value={cost} onChange={(e) => {
                    setCost(Number(e.target.value));
                }} required={true} />
            </div>
            <input type="submit" value="submit" />
        </form>
    );
}


export default AddItem;