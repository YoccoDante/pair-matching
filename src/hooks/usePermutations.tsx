import React, { useEffect, useState } from 'react'
import useCreateBottles from './useCreateBottles'
import { BottleModel } from '../models/bottle'
import { LevelModel } from '../models/level'

function usePermutations() {
  const {getBottles} = useCreateBottles()
  const numLevels = 17
  const [bottles, setBottles] = useState<BottleModel[]>([])
  const [level, setLevel] = useState(1)
  const [levels, setLevels] = useState<LevelModel[]>([])
  const [isVictory, setIsVictory] = useState(false)
  const [selectedBottle, setSelectedBottle] = useState<BottleModel|null>(null)

  const handleSelectBottle = (bottle:BottleModel) => {
    if (selectedBottle && selectedBottle._id == bottle._id) return
    setSelectedBottle(bottle)
  }
  const switchBottles = () => {
    if (!selectedBottle) return
    const centerIndex = bottles.findIndex((bottle) => bottle._id == selectedBottle._id)
    
    // Split the array into two parts
    const leftBottles = [...bottles].splice(0, centerIndex)
    const rightBottles = [...bottles].splice(centerIndex + 1)

    // Concatenate the two parts in reverse order
    const switchedBottles = rightBottles.concat([bottles[centerIndex]],leftBottles)

    setBottles(switchedBottles)
  }

  const defineGame = () => {
    const {shuffledBottles} = getBottles(level + 3)
    setBottles(shuffledBottles)
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
    switchBottles,
    selectedBottle,
    setLevel
  }
}

export default usePermutations