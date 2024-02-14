import Button from '../../components/tags/Button'
import { useLocation} from 'wouter'
import Title from '../../components/tags/Title';

function HomePage() {
    const [location, setLocation] = useLocation();

    const goToBottles = () => {
        setLocation('/bottles');
    };

    const goToPermutations = () => {
        setLocation('/permutations');
    };
  return (
    <div
    style={{
        display:'flex',
        flexDirection:'column',
        width:'100vw',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    }}>
        <div style={{display:'flex', flexDirection:'column', gap:'25px', position:'absolute', top:0}}>
            <Title type={1}>LOGICAL GAMES</Title>
            <Button backgroundColor='#d9d9d9' height='50px' onClick={goToBottles}>Bottles Game</Button>
            <Button backgroundColor='#d9d9d9' height='50px' onClick={goToPermutations}>Permutations Game</Button>
        </div>
    </div>
  )
}

export default HomePage