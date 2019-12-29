import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const DatalistContext = createContext();

const DatalistContextProvider = ({ children }) => {
    const [suggestions] = useState([
        { name: 'Bacon', id: uuid() },
        { name: 'Mjolk', id: uuid() },
        { name: 'Kott', id: uuid() }
    ]);

    return (
        <DatalistContext.Provider value={{ suggestions }}>
            {children}
        </DatalistContext.Provider>
    );
}

export default DatalistContextProvider;