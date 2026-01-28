import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Teste1" targetTime={15} />
        <TimerChallenge title="Teste2" targetTime={10} />
        <TimerChallenge title="Teste3" targetTime={5} />
        <TimerChallenge title="Teste4" targetTime={2} />
      </div>
    </>
  );
}

export default App;
