import React from 'react';

const AutoComplete = ({ name, setName, suggestions, focus }) => {

    let suggestionsList;
    if (focus) {
        suggestionsList = name ? (
            [...suggestions.filter((suggestion) => suggestion.name.toLowerCase().includes(name.toLowerCase())).map((suggestion) => (
                <li onClick={(e) => {
                    setName(suggestion.name);
                    document.querySelector('#cost').focus();
                }} key={suggestion.id}>{suggestion.name}</li>)
            )]
        ) : (
                []
            )
    }

    return (
        <div id="suggestions">
            <ul>
                {suggestionsList}
            </ul>
        </div>
    );
}

export default AutoComplete;