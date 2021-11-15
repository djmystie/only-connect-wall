export default function QuestionChoice({setQuestion}) {

    const choices = [
        "twoReeds",
        "lion",
        "twistedFlax",
        "hornedViper",
        "water",
        "eyeOfHorus"
    ]

    return (
        <div className="wallContainer">
        <div className="choiceContainer">
            {choices.map(choice=> (
                <div className="choiceBox"style={{ backgroundImage: `url(/${choice}.png)` }} onClick={()=>setQuestion(choice)} />
            ))}
        </div>
        </div>
    )
}