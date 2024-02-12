import React, { createContext, useContext, ReactNode } from 'react'
import { BottleModel } from '../models/bottle';
import useBottles from '../hooks/useBottles';
import { LevelModel } from '../models/level';

// Define the context type
interface BottlesContextType {
    isVictory: boolean;
    checkMatches: () => void;
    surrender: boolean;
    setSurrender: React.Dispatch<React.SetStateAction<boolean>>;
    matches: number;
    bottles: BottleModel[];
    trueOrder: BottleModel[];
    setBottles: React.Dispatch<React.SetStateAction<BottleModel[]>>;
    retry: () => void;
    nextLevel:() => void;
    defineGame:() => void;
    setLevel:React.Dispatch<React.SetStateAction<number>>
    levels:LevelModel[];
    setLevels:React.Dispatch<React.SetStateAction<LevelModel[]>>;
    time:number;
}

// 1. Create a new context
const BottlesContext = createContext<BottlesContextType | null>(null);

// 3. Create a provider component
interface BottlesProviderProps {
    children: ReactNode;
}

export function BottlesProvider({children}: BottlesProviderProps) {
    const bottlesValue = useBottles(); 

    return (
        <BottlesContext.Provider value={bottlesValue}>
            {children}
        </BottlesContext.Provider>
    );
}

// 4. Create a custom hook that uses the context
export function useBottlesContext() {
    const context = useContext(BottlesContext);
    if (!context) {
        throw new Error('useBottlesContext must be used within a BottlesProvider');
    }
    return context;
}