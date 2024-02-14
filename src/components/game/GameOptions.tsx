import { useSettingsContext } from '../../contexts/SettingsContext';
import GameIcon from '../icons/GameIcon';

function GameOptions() {
    const {playMusic, setPlayMusic, setIsDraggable, isDraggable} = useSettingsContext()
    return (
        <div
        style={{
            display:'flex',
            position:'fixed',
            top:0,
            left:0,
            zIndex:2,
            width:'100vw',
            padding:'50px',
            boxSizing:'border-box',
            gap:'15px'
        }}>
            <div style={{display:'flex', flexGrow:1}}>
                <GameIcon type='arrow-back'/>
            </div>
            <GameIcon type='animated-bg'/>
            <GameIcon isActive={playMusic} type='music' onClick={() => setPlayMusic(!playMusic)}/>
            <GameIcon type='volume-control'/>
            <GameIcon isActive={isDraggable} type='switchable' onClick={() => setIsDraggable(!isDraggable)}/>
        </div>
  );
}

export default GameOptions;