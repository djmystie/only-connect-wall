import {useState} from 'react'
import './Wall.css'
import ControlBar from './ControlBar';
import RoundOne from './RoundOne'
import RoundTwo from './RoundTwo'
import WallRound from './WallRound'
import Vowels from './Vowels'

function App() {
  const [round, setRound] = useState("choose")
  const [question, setQuestion] = useState(false)
  return (
    <div className="wallContainer">
      <ControlBar round={round} setRound={setRound} />
    {/* {question ? <Wall question={question} /> : <QuestionChoice setQuestion={setQuestion} />} */}
    {
    round === "choose" ?
    <div/>
    : round === "one"
    ? <RoundOne />
    : round === "two"
    ? <RoundTwo />
    : round === 'wall'
    ? <WallRound />
    : <Vowels />
  }
    </div>
  );
}

export default App;
