import FlipMove from 'react-flip-move'
import Bottle from '../../components/bottles/bottle'
import Button from '../../components/Button'
import VictoryDialog from '../../components/VictoryDialog'
import { usePermutationsContext } from '../../contexts/PermutationsContext'
import { useEffect } from 'react'
import { useParams } from 'wouter'

function Permutations() {
  const params = useParams()
  const {bottles, isVictory, nextLevel, selectedBottle, handleSelectBottle, switchBottles, setLevel} = usePermutationsContext()
  useEffect(() => {
    setLevel(Number(params.level))
  },[])
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh'}}>
      <FlipMove style={{display:'flex', gap:'15px', alignItems:'center'}}>
        {bottles.map((bottle) => {
            const isSelected = selectedBottle? selectedBottle._id === bottle._id : false
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
      <Button onClick={switchBottles}>Swap</Button>
      <VictoryDialog isOpen={isVictory} onRequestClose={nextLevel}/>
    </div>
  )
}

export default Permutations