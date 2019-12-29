import React from 'react';

const Datalist = ({ name, setName, suggestions }) => {

    const suggestionsList = name ? (
        [...suggestions.filter((suggestion) => suggestion.name.toLowerCase().includes(name)).map((suggestion) => (
            <option value={suggestion.name} onClick={(e) => {
                setName(suggestion.name);
            }} key={suggestion.id}>{suggestion.name}</option>)
        )]
    ) : (
            null
        )

    return (
        <datalist id="suggestions">
            {suggestionsList}
        </datalist>
    );
}

export default Datalist;