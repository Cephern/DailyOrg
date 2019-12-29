import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const AutoCompleteContext = createContext();

const AutoCompleteContextProvider = ({ children }) => {
    const [suggestions] = useState([
        { name: 'Bacon', id: uuid() },
        { name: 'Mjolk', id: uuid() },
        { name: 'Kott', id: uuid() }
    ]);

    const [focus, setFocus] = useState(false);

    return (
        <AutoCompleteContext.Provider value={{ suggestions, focus, setFocus }}>
            {children}
        </AutoCompleteContext.Provider>
    );
}

export default AutoCompleteContextProvider;