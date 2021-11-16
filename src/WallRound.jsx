import QuestionChoice from "./QuestionChoice"
import { useState, useEffect } from "react"
import Wall from './Wall'


export default function WallRound(){

    const [question, setQuestion] = useState(false)
    const [usedQuestions, setUsedQuestions] = useState([])

    useEffect(()=>{
        if(question){
            setUsedQuestions([...usedQuestions, question])
        }
    },[question])

    return (
        <div className="wallContainer">
            {!question ? <QuestionChoice setQuestion={setQuestion} usedQuestions={usedQuestions} /> : <Wall question={question} setQuestion={setQuestion} />}
        </div>
    )
}