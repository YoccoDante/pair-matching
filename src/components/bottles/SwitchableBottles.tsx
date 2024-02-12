import React, { useEffect, useState } from 'react'
import Bottle from './bottle'
import { BottleModel } from '../../models/bottle'
import { useBottlesContext } from '../../contexts/BottleContext'
import FlipMove from 'react-flip-move'

function SwitchableBottles() {
    const {bottles,setBottles,checkMatches, retry} = useBottlesContext()
    const [selectedBottles, setSelectedBottles] = useState<BottleModel[]>([])

    const handleSelectBottle = (newBottle:BottleModel) => {
        const bottlesCopy = [...selectedBottles]
    
        /*if the bottle is already in the selected bottles, removes it from it*/
        if (bottlesCopy.some((bottle) => (bottle._id === newBottle._id))) {
            const newBottles = bottlesCopy.filter((bottle) => (
                bottle._id !== newBottle._id
            ))
            setSelectedBottles(newBottles)
            return
        }
    
        /*add the bottle if there is less than 2 bottles*/
        if (selectedBottles.length < 2){
            bottlesCopy.push(newBottle)
            setSelectedBottles(bottlesCopy)
            return
        }
    
        /*if there is more than 2 bottles, add the bottle and removes the first one*/
        if (selectedBottles.length >= 2) {
            bottlesCopy.push(newBottle)
            bottlesCopy.shift()
            setSelectedBottles(bottlesCopy)
        }
    }

    const handleSwitch = () => {
        const bottlesCopy = [...bottles]
    
        if (selectedBottles.length !== 2) {
            console.log('You need to select exactly 2 bottles to switch their positions.')
            return
        }
    
        const index1 = bottlesCopy.findIndex(bottle => bottle._id === selectedBottles[0]._id)
        const index2 = bottlesCopy.findIndex(bottle => bottle._id === selectedBottles[1]._id)
    
        if (index1 === -1 || index2 === -1) {
            console.log('One or both of the selected bottles could not be found.')
            return
        }
    
        // Switch positions
        [bottlesCopy[index1], bottlesCopy[index2]] = [bottlesCopy[index2], bottlesCopy[index1]]
    
        setBottles(bottlesCopy)
    }

  return (
        <>
            <FlipMove style={{display:'flex', gap:'15px', alignItems:'center'}}>
                {bottles.map((bottle) => {
                    const isSelected = selectedBottles.some(selectedBottle => selectedBottle._id === bottle._id)
                    return (
                        <div
                            key={bottle._id}
                            style={{border:isSelected? '5px solid gold':'5px solid white'}}
                            onClick={() => handleSelectBottle(bottle)}
                        >
                            <Bottle bottle={bottle}/>
                        </div>
                    )
                })}
            </FlipMove>
            <button onClick={handleSwitch} disabled={selectedBottles.length === 2 ? false : true}>intercambiar</button>
        </>
  )
}

export default SwitchableBottles