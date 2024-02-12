import Level from '../../components/Level'
import { useLocation } from 'wouter'
import { LevelModel } from '../../models/level'

function BottlesLevels({levels, to}:{levels:LevelModel[], to:string}) {
  const [location, setLocation] = useLocation()

  const goToLevel = (level:string) => {
    setLocation(`${to}/${level}`)
  }

  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', // replace 100px with the width of your Level components
        rowGap:'60px',
        columnGap:'60px',
        width: '100vw',
        padding: '100px',
        boxSizing: 'border-box',
        justifyContent:'center'
    }}>
        {levels.map((level, index) => {
            return <Level key={index} level={level} onClick={() => goToLevel(String(index))}/>
        })}
    </div>
  )
}

export default BottlesLevels