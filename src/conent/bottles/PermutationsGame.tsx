import { usePermutationsContext } from '../../contexts/PermutationsContext'
import LevelsManager from './LevelsManager'

function BottleGame() {
    const {levels} = usePermutationsContext()
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <LevelsManager levels={levels} to='permutations'/>
    </div>
  )
}

export default BottleGame