'use client';

import { createContext, FC, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface IStateContext {
    activeSection: string;
    setActiveSection: Dispatch<SetStateAction<string>>;
    
}

const StateContext = createContext<IStateContext | undefined>(undefined);

interface IStateProviderProps {
    children: ReactNode;
}

export const StateProvider: FC<IStateProviderProps> = ({ children }) => {
    const [activeSection, setActiveSection] = useState<string>("home");

    return (
        <StateContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error("useStateContext must be used within a StateProvider");
    }
    return context;
};
