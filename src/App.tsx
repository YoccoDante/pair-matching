import './App.css';
import AppRouter from './AppRouter';
import BG2 from './components/BG2';
import GameOptions from './components/GameOptions';
import SoundtrackManager from './components/SoundtrackManager';
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
