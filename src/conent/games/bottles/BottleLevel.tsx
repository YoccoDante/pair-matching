import { useBottlesContext } from '../../../contexts/BottleContext'
import { useEffect } from 'react'
import Title from '../../../components/tags/Title'
import { useParams } from 'wouter'
import VictoryDialog from '../../../components/game/VictoryDialog'
import Timer from '../../../components/game/Timer'
import BottlesDisplay from '../../../components/bottles/BottlesDisplay'

function BottleLevel() {
    const params = useParams()
    const {setLevel, isVictory, nextLevel, time} = useBottlesContext()
    
    useEffect(() => {
        setLevel(Number(params.level))
    },[])

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'15px', justifyContent:'center', alignItems:'center'}}>
        <Timer size='50px' initialTimeSec={time} isVictory={isVictory} onFinishTime={() => console.log('xd')}/>
        <Title type={2}>Level {params.level}</Title>
        <BottlesDisplay/>
        <VictoryDialog isOpen={isVictory} onRequestClose={nextLevel}/>
    </div>
  )
}

export default BottleLevel