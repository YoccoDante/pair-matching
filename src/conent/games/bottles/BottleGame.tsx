import { useBottlesContext } from '../../../contexts/BottleContext'
import LevelsManager from '../../pages/LevelsManager'

function BottleGame() {
    const {levels} = useBottlesContext()
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <LevelsManager levels={levels} to='bottles'/>
    </div>
  )
}

export default BottleGame