import React from 'react'
import FlipMove from 'react-flip-move'
import Button from '../../../components/tags/Button'
import { usePermutationsContext } from '../../../contexts/PermutationsContext'
import Bottle from '../../../components/bottles/bottle'

function PermutationsDisplay() {
    const {bottles,selectedBottle,handleSelectBottle,swapBottles} = usePermutationsContext()
  return (
    <>
    <FlipMove style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop:'30px' }}>
          {bottles.map((bottle) => {
              const isSelected = selectedBottle ? selectedBottle._id === bottle._id : false
              return (
                  <div
                      key={bottle._id}
                      style={{ border: isSelected ? '5px solid gold' : '5px solid white' }}
                      onClick={() => handleSelectBottle(bottle)}
                  >
                      <Bottle bottle={bottle} />
                  </div>
              )
          })}
      </FlipMove>
      <Button onClick={swapBottles}>Swap</Button>
      </>
  )
}

export default PermutationsDisplay