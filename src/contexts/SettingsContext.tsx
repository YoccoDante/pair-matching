import React, { createContext, useContext, ReactNode } from 'react'
import useSettings from '../hooks/useSettings';

// Define the context type
interface SettingsContextType {
    animatedBG: boolean;
    setAnimatedBG: React.Dispatch<React.SetStateAction<boolean>>;
    playMusic: boolean;
    setPlayMusic: React.Dispatch<React.SetStateAction<boolean>>;
    seeOptions: boolean;
    setSeeOptions: React.Dispatch<React.SetStateAction<boolean>>;
    isDraggable: boolean;
    setIsDraggable: React.Dispatch<React.SetStateAction<boolean>>;
}

// 1. Create a new context
const SettingsContext = createContext<SettingsContextType | null>(null);

// 3. Create a provider component
interface SettingsProviderProps {
    children: ReactNode;
}

export function SettingsProvider({children}: SettingsProviderProps) {
    const SettingsValue = useSettings(); 

    return (
        <SettingsContext.Provider value={SettingsValue}>
            {children}
        </SettingsContext.Provider>
    );
}

// 4. Create a custom hook that uses the context
export function useSettingsContext() {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettingsContext must be used within a SettingsProvider');
    }
    return context;
}