import React, { useState } from 'react'

function useSettings() {
    const [animatedBG, setAnimatedBG] = useState(true)
    const [playMusic, setPlayMusic] = useState(true)
    const [seeOptions, setSeeOptions] = useState(false)
    const [isDraggable, setIsDraggable] = useState(false)
  return {
    animatedBG,
    setAnimatedBG,
    playMusic,
    setPlayMusic,
    seeOptions,
    setSeeOptions,
    isDraggable,
    setIsDraggable
  }
}

export default useSettings