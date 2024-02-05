import React, {useState, useEffect} from 'react'
import { BottleModel } from '../models/bottle';

function useBottles({numBottles}:{numBottles:number}) {
    const [isVictory, setIsVictory] = useState(false)
    const [bottles, setBottels] = useState<BottleModel[]>([]);
    const [trueOrder, setTrueOrder] = useState<BottleModel[]>([])
    const [matches, setMatches] = useState<number>(0)
    const [surrender, setSurrender] = useState(false)

    const checkMatches = () => {
        let matches = 0
        for(let i = 0; i < bottles.length; i++){
            if (trueOrder[i].order === bottles[i].order){
                matches++
            }
        }
        setMatches(matches)
        if (matches === numBottles){
            setIsVictory(true)
        }
    }

    const defineBottlesGame = () => {
        const newBottles = defineBottles({numBottles})
        const shuffledBottles = shuffleBottles(newBottles)
        const reShuffledBottles = shuffleBottles(newBottles)
        setBottels(shuffledBottles)
        setTrueOrder(reShuffledBottles)
    }

    const retry = () => {
        setIsVictory(false)
        setSurrender(false)
        defineBottlesGame()
    }
    
    useEffect(() => {
       defineBottlesGame() 
    },[])

    function getLuminance(r: number, g: number, b: number) {
        const a = [r, g, b].map((v) => {
            v /= 255;
            return v <= 0.03928
                ? v / 12.92
                : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    const defineBottles = ({numBottles}:{numBottles:number}) => {
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
        const newArray = [... array]
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return newArray;
    }
  return ({
    defineBottles,
    shuffleBottles,
    isVictory,
    checkMatches,
    surrender,
    setSurrender,
    matches,
    bottles,
    trueOrder,
    setBottels,
    retry

  })
}

export default useBottles