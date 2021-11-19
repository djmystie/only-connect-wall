export default function QuestionChoice({setQuestion, usedQuestions}) {

    const choices = [
        "twoReeds",
        "lion",
        "twistedFlax",
        "hornedViper",
        "water",
        "eyeOfHorus"
    ]

    return (
        
        <div className="choiceContainer">
            {choices.map(choice=> (
                <div className={usedQuestions.includes(choice) ? "choiceBox used" : "choiceBox"} style={{ backgroundImage: `url(/${choice}.png)` }} onClick={()=>usedQuestions.includes(choice) ? null : setQuestion(choice)} />
            ))}
            <div onClick={()=>setQuestion("demo")}>Demo</div>
        </div>
    )
}