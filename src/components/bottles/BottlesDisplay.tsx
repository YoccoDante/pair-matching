import React, { useEffect, useState } from 'react'
import { useBottlesContext } from '../../contexts/BottleContext'
import DraggableBottles from './DraggableBottles'
import SwitchableBottles from './SwitchableBottles'
import { useSettingsContext } from '../../contexts/SettingsContext'
import MovesCounter from '../game/MovesCounter'

function BottlesDisplay() {
    const {isDraggable} = useSettingsContext()
    const {matches, surrender, retry, trueOrder, setSurrender, movesLeft} = useBottlesContext()

  return (
    <>
    <MovesCounter movesLeft={movesLeft} size='24px'/>
    <p style={{fontSize:'36px', margin:0, padding:0}}>Matches: {matches}</p>
        {isDraggable?
            <DraggableBottles/>
            :
            <SwitchableBottles/>
        }
        {surrender?
            <>
            <p style={{fontSize:'24px'}}>Original:</p>
            <button onClick={retry}>retry</button>
            <div style={{display:'flex', gap:'15px', flexDirection:'row'}}>
                {trueOrder.map((bottle) => {
                    return (
                        <div
                        key={`original${bottle._id}`}
                        style={{
                                width:'100px',
                                height:'100px',
                                border:'2px solid black',
                                backgroundColor:bottle.color,
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                color:bottle.isWhiteFont? 'white' : 'black'
                            }}
                        >
                            {bottle.order}
                        </div>
                    )
                })}
            </div>
            </>
        :
        <>
            <button onClick={() => setSurrender(true)}>Surrender</button>
        </>
        }
    </>
  )
}

export default BottlesDisplay