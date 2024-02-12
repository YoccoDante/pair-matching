import React, {useState, useEffect} from 'react'
import { BottleModel } from '../models/bottle';
import useCreateBottles from './useCreateBottles';
import { LevelModel } from '../models/level';
import { useLocation } from 'wouter';

function useBottles() {
    const {getBottles} = useCreateBottles()
    const numLevels = 17
    const [location, setLocation] = useLocation()
    const [isVictory, setIsVictory] = useState(false)
    const [bottles, setBottles] = useState<BottleModel[]>([]);
    const [trueOrder, setTrueOrder] = useState<BottleModel[]>([])
    const [matches, setMatches] = useState<number>(0)
    const [surrender, setSurrender] = useState(false)
    const [level, setLevel] = useState(0)
    const [levels, setLevels] = useState<LevelModel[]>([])
    const [time, setTime] = useState(0)

    const checkMatches = () => {
        if (bottles.length == 0) return
        if (surrender) return
        let matches = 0
        for(let i = 0; i < bottles.length; i++){
            if (trueOrder[i].order === bottles[i].order){
                matches++
            }
        }
        setMatches(matches)
        if (matches === bottles.length){
            setIsVictory(true)
        }
    }

    const defineGame = () => {
        const numBottles = level + 3
        const {bottles, shuffledBottles} = getBottles(numBottles)
        setBottles(bottles)
        setTrueOrder(shuffledBottles)
        setTime(bottles.length*10)
    }

    const retry = () => {
        defineGame()
        setSurrender(false)
        setIsVictory(false)
    }

    const nextLevel = () => {
        setLevel(level+1)
        setIsVictory(false)
        const levelsCopy = [... levels]
        levelsCopy[level+1].isLocked = false
        setLevels(levelsCopy)
        setLocation(String(level+1))
    }

    useEffect(() => {
        checkMatches()
    },[bottles])

    useEffect(() => {
        const newLevels = []
        for (let i = 0; i < numLevels; i++){
            const newLevel:LevelModel = {isLocked: i!==0, levelLabel:String(i+1),stars:0}
            newLevels.push(newLevel)
        }
        setLevels(newLevels)
    },[])

    useEffect(() => {
        defineGame()
    },[level])

  return ({
    isVictory,
    checkMatches,
    surrender,
    setSurrender,
    matches,
    bottles,
    setBottles,
    trueOrder,
    retry,
    nextLevel,
    defineGame,
    setLevel,
    levels,
    setLevels,
    time
  })
}

export default useBottles