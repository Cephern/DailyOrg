import React, { useState, useEffect } from 'react';
import uuid from 'uuid';

const AutoComplete = ({ name, setName, height, setHeight }) => {
    const [suggestions] = useState([
        { name: 'Bacon', id: uuid() },
        { name: 'Mjolk', id: uuid() },
        { name: 'Kott', id: uuid() }
    ]);

    const [currentSuggestion, setCurrentSuggestion] = useState('');

    const suggestionsList = suggestions
        .filter((suggestion) => suggestion.name.toLowerCase().includes(name.toLowerCase()))
        .map((suggestion) => {
            return (
                <li className="suggestion" onClick={() => {
                    setName(suggestion.name);
                    setCurrentSuggestion(suggestion.name);
                    document.querySelector('#cost').focus();
                }} key={suggestion.id} >{suggestion.name}</li>
            )
        });

    const showSuggestions = (name, currentSuggestion) => {
        if (name.length > 0 && name !== currentSuggestion) {
            setHeight('auto');
        } else {
            setHeight('0px');
        }
    }

    useEffect(() => showSuggestions(name, currentSuggestion), [name]);

    return (
        <div className="suggestions" style={{ height }} >
            <ul id="autoComplete">
                {suggestionsList}
            </ul>
        </div>
    )

}

export default AutoComplete;