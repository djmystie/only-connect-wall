import QuestionChoice from "./QuestionChoice"
import { useState, useEffect } from "react"
import { missingVowels } from './questions'

export default function Vowels(){

    const [question, setQuestion] = useState(false)
    const [usedQuestions, setUsedQuestions] = useState([])

    useEffect(()=>{
        if(question){
            setUsedQuestions([...usedQuestions, question])
        }
    },[question])

    const ShowVowels = () => {

        const [clue, setClue] = useState(0)
        const [showAnswer, setShowAnswer] = useState(false)

        const questionData = missingVowels[question]
        console.log(questionData)


        return (
            <>
            <div className="vowelsTitle">{questionData.title}</div>
            <div className="vowelsClue">{showAnswer ? questionData.phrases[clue].answer : questionData.phrases[clue].question}</div>
            {showAnswer ? <div className="button" onClick={() =>{clue === 3 ? setQuestion(false) : setClue(clue => clue +1 ); setShowAnswer(false)}}>{clue === 3 ? "Back" : "Next"}</div>
            : <div className="button" onClick={() => setShowAnswer(true)}>Show Answer</div>}
            </>

        )
    }

    return (
        <div className="vowelsContainer">
            {!question ? <QuestionChoice setQuestion={setQuestion} usedQuestions={usedQuestions} /> : <ShowVowels />}
        </div>
    )
}