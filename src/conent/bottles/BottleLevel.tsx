import DraggableBottles from '../../components/bottles/DraggableBottles'
import SwitchableBottles from '../../components/bottles/SwitchableBottles'
import { useBottlesContext } from '../../contexts/BottleContext'
import GameOptions from '../../components/GameOptions'
import { useEffect, useState } from 'react'
import { useSettingsContext } from '../../contexts/SettingsContext'
import Title from '../../components/Title'
import { useParams } from 'wouter'
import VictoryDialog from '../../components/VictoryDialog'
import Timer from '../../components/Timer'

function BottleLevel() {
    const {isDraggable} = useSettingsContext()
    const params = useParams()
    const {matches, surrender, setSurrender, retry, trueOrder, setLevel, isVictory, nextLevel, time} = useBottlesContext()
    
    useEffect(() => {
        setLevel(Number(params.level))
    },[])
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'15px', justifyContent:'center', alignItems:'center'}}>
        <Timer size='50px' initialTimeSec={time} onFinishTime={() => console.log('xd')}/>
        <Title type={2}>Level {Number(params.level)+1}</Title>
        <p style={{fontSize:'24px'}}>Matches: {matches}</p>
        {isDraggable?
            <DraggableBottles/>
            :
            <SwitchableBottles/>
        }
        <p style={{fontSize:'24px'}}>Original:</p>
        {surrender?
            <>
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
            <GameOptions/>
        </>
        }
        <VictoryDialog isOpen={isVictory} onRequestClose={nextLevel}/>
    </div>
  )
}

export default BottleLevel