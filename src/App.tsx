import './App.css';
import AppRouter from './AppRouter';
import BG2 from './components/game/BackGround';
import GameOptions from './components/game/GameOptions';
import SoundtrackManager from './components/game/SoundtrackManager';
import { SettingsProvider } from './contexts/SettingsContext';

function App() {
  return (
      <>
        <SettingsProvider>
          <SoundtrackManager/>
          <BG2/>
          <GameOptions/>
          <AppRouter/>
        </SettingsProvider>
      </>
  );
}

export default App;
