import React, { createContext, useContext, ReactNode } from 'react'
import usePermutations from '../hooks/usePermutations';
import { BottleModel } from '../models/bottle';
import { LevelModel } from '../models/level';

// Define the context type
interface PermutationsContextType {
    bottles:BottleModel[];
    setBottles:React.Dispatch<React.SetStateAction<BottleModel[]>>;
    isVictory:boolean;
    levels:LevelModel[],
    nextLevel:() => void;
    handleSelectBottle:(bottle:BottleModel) => void;
    swapBottles:() => void;
    selectedBottle:BottleModel|null,
    setLevel:React.Dispatch<React.SetStateAction<number>>,
    movesLeft:number;
    time:number
}

// 1. Create a new context
const PermutationsContext = createContext<PermutationsContextType | null>(null);

// 3. Create a provider component
interface PermutationsProviderProps {
    children: ReactNode;
}

export function PermutationsProvider({children}: PermutationsProviderProps) {
    const PermutationsValue = usePermutations(); 

    return (
        <PermutationsContext.Provider value={PermutationsValue}>
            {children}
        </PermutationsContext.Provider>
    );
}

// 4. Create a custom hook that uses the context
export function usePermutationsContext() {
    const context = useContext(PermutationsContext);
    if (!context) {
        throw new Error('usePermutationsContext must be used within a PermutationsProvider');
    }
    return context;
}