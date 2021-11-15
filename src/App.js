import Wall from './Wall'
import {useState} from 'react'
import './Wall.css'
import QuestionChoice from './QuestionChoice';

function App() {
  const [question, setQuestion] = useState(false)
  return (
    <>
    {question ? <Wall question={question} /> : <QuestionChoice setQuestion={setQuestion} />}
    </>
  );
}

export default App;
