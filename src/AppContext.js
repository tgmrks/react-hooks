import { createContext, useState } from 'react';

export const AppContext = createContext(null)

export function AppProvider({ children }) {

    const [value, setValue] = useState("Using context at")

    return(
        <AppContext.Provider value={{ value, setValue }}>
            {children}
        </AppContext.Provider>
    )
}