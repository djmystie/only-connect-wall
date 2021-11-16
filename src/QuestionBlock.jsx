import ClueBlock from './ClueBlock'
import { useState, useEffect } from 'react'

export default function QuestionBlock({question, setQuestion, questions, hideLast}){

    const [showClue, setClue] = useState(1)
    const [clock, setClock] = useState(40)

    useEffect(() => {
        if(clock > 0){
            const timer = setTimeout(() => {
                setClock(clock => clock - 1)
              }, 1000);
              return () => clearTimeout(timer);
        }
    },[clock])

    return (
        <>
        <div className="fourBlock">
            <ClueBlock clue={questions[question][0]} points="5 Points " showTimer={showClue === 1} clock={clock} />
            {showClue > 1 ? <ClueBlock clue={questions[question][1]} points="4 Points " showTimer={showClue === 2} clock={clock} /> : null}
            {showClue > 2 ? <ClueBlock clue={questions[question][2]} points="2 Points " showTimer={showClue === 3 && !hideLast} clock={clock} /> : null}
            {hideLast && showClue === 3 ? <ClueBlock clue={{title: "?"}} points="1 Point " showTimer={showClue === 3} clock={clock}  /> : null}
            {showClue > 3 ? <ClueBlock clue={questions[question][3]} points="1 Point " showTimer={showClue === 4} clock={clock}  /> : null}
        </div>
        <div className="button" onClick={()=>showClue === 4 ? setQuestion(false) : setClue(clue=>clue+1)}>
            {showClue === 4 ? "Back"  : "Next"}
        </div>
        </>
    )
}