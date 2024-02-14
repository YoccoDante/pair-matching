import React, { useEffect, useState } from 'react'
import useCreateBottles from './useCreateBottles'
import { BottleModel } from '../models/bottle'
import { LevelModel } from '../models/level'
import { useLocation } from 'wouter'

function usePermutations() {
  const {getBottles} = useCreateBottles()
  const numLevels = 17
  const [bottles, setBottles] = useState<BottleModel[]>([])
  const [level, setLevel] = useState(1)
  const [levels, setLevels] = useState<LevelModel[]>([])
  const [isVictory, setIsVictory] = useState(false)
  const [selectedBottle, setSelectedBottle] = useState<BottleModel|null>(null)
  const [movesDone, setMovesDone] = useState(0)
  const [time, setTime] = useState(0)
  const [location, setLocation] = useLocation()
  const maxMoves = Math.floor(bottles.length + bottles.length/2)
  const movesLeft = maxMoves - movesDone

  const handleDiscountMove = () => {
      if (movesLeft === 0) return
      setMovesDone(movesDone + 1)
  }

  const handleSelectBottle = (bottle:BottleModel) => {
    if (selectedBottle && selectedBottle._id == bottle._id) return
    setSelectedBottle(bottle)
  }
  const swapBottles = () => {
    if (!selectedBottle) return
    const centerIndex = bottles.findIndex((bottle) => bottle._id == selectedBottle._id)
    
    // Split the array into two parts
    const leftBottles = [...bottles].splice(0, centerIndex)
    const rightBottles = [...bottles].splice(centerIndex + 1)

    // Concatenate the two parts in reverse order
    const swapedBottles = rightBottles.concat([bottles[centerIndex]],leftBottles)

    setBottles(swapedBottles)
    handleDiscountMove()
  }

  const defineGame = () => {
    const {shuffledBottles} = getBottles(level + 3)
    setBottles(shuffledBottles)

    const newTime = shuffledBottles.length * 10
    setTime(newTime)
    setMovesDone(0)
  }

  const checkVictory = () => {
    if (bottles.length === 0) return
    let corrects = 0
    for (let i=0; i < bottles.length; i++){
      if (bottles[i].order === i) {
        corrects ++
      }
    }
    if (corrects === bottles.length) {
      setIsVictory(true)
    }
  }

  const retry = () => {
    defineGame()
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
    defineGame()
  },[level])
  useEffect(() => {
    checkVictory()
  },[bottles])
  useEffect(() => {
    const newLevels = []
    for (let i=0; i<numLevels; i++){
        const newLevel:LevelModel = {isLocked:i!==0, levelLabel:String(i+1), stars:0}
        newLevels.push(newLevel)
    }
    setLevels(newLevels)
  },[])
  return {
    bottles,
    setBottles,
    isVictory,
    levels,
    nextLevel,
    handleSelectBottle,
    swapBottles,
    selectedBottle,
    setLevel,
    movesLeft,
    time
  }
}

export default usePermutations