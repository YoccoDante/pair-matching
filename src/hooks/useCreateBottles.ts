import React from 'react'
import { BottleModel } from '../models/bottle';

function useCreateBottles() {

    function getLuminance(r: number, g: number, b: number) {
        const a = [r, g, b].map((v) => {
            v /= 255;
            return v <= 0.03928
                ? v / 12.92
                : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    const defineBottles = (numBottles:number) => {
        const newBottles = []
        for(let i = 0; i < numBottles; i++){
            const randomNum1 = Math.floor(Math.random() * 256);
            const randomNum2 = Math.floor(Math.random() * 256);
            const randomNum3 = Math.floor(Math.random() * 256);

            const luminance = getLuminance(randomNum1, randomNum2, randomNum3);
            const isWhiteFont = luminance < 0.5;
    
            const newBottle:BottleModel = {
                _id:i,
                color:`rgb(${randomNum1},${randomNum2},${randomNum3})`,
                isWhiteFont:isWhiteFont,
                order:i
            }
            newBottles.push(newBottle)
        }
        return newBottles
    }

    function shuffleBottles(array:BottleModel[]) {
        let newArray = [...array];
    
        // Function to check if two arrays are equal
        const arraysAreEqual = (arr1:BottleModel[], arr2:BottleModel[]) => {
            return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
        }
    
        // Shuffle the array
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
    
        // If the shuffled array is the same as the original array, shuffle again
        while (arraysAreEqual(array, newArray)) {
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
        }
    
        return newArray;
    }

    function getBottles (numBottles:number){
        const bottles = defineBottles(numBottles)
        const shuffledBottles = shuffleBottles(bottles)
        return {bottles, shuffledBottles}
    }
  return {
    getBottles
  }
}

export default useCreateBottles