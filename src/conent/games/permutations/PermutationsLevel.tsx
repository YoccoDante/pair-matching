import FlipMove from 'react-flip-move'
import Bottle from '../../../components/bottles/bottle'
import Button from '../../../components/tags/Button'
import VictoryDialog from '../../../components/game/VictoryDialog'
import { usePermutationsContext } from '../../../contexts/PermutationsContext'
import { useEffect } from 'react'
import { useParams } from 'wouter'
import PermutationsDisplay from './PermutationsDisplay'
import Timer from '../../../components/game/Timer'
import Title from '../../../components/tags/Title'
import MovesCounter from '../../../components/game/MovesCounter'

function PermutationsLevel() {
  const params = useParams()
  const {isVictory, nextLevel, setLevel, time, movesLeft} = usePermutationsContext()
  useEffect(() => {
    setLevel(Number(params.level))
  },[])
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Timer size='50px' initialTimeSec={time} isVictory={isVictory} onFinishTime={() => console.log('xd')}/>
      <Title type={2}>Level {params.level}</Title>
      <MovesCounter movesLeft={movesLeft} size='24px'/>
      <PermutationsDisplay/>
      <VictoryDialog isOpen={isVictory} onRequestClose={nextLevel}/>
    </div>
  )
}

export default PermutationsLevel