import React, { useState } from 'react'
import BottlesMenu from '../../components/bottles/BottlesMenu'
import DraggableBottles from '../../components/bottles/DraggableBottles'

function BottleGame() {
    const [seeMenu, setSeemenu] = useState(true)
    const [numBottles, setNumBottles] = useState<number>(3)
    const [playing, setPlaying] = useState(false)
    const [isDraggable, setIsDraggable] = useState(false)
  return (
    <>
    {playing?
        <>
        {isDraggable?
            <DraggableBottles numBottles={numBottles}/>
            :
            <p>holas</p>
        }
        </>
    :
        <BottlesMenu
            open={seeMenu}
            bottles={numBottles}
            setBottles={setNumBottles}
            setIsDraggable={setIsDraggable}
            setPlaying={setPlaying}
        />
    }
    
    </>
  )
}

export default BottleGame