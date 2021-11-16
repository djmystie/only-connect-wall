export default function ClueBlock({clue, points, clock = 40, showTimer, answer}){

    const Timer = () => {
        let currentPercentage = (clock/40)*100
        return (
                <div className="clueTimerContainer" style={showTimer ? null : {backgroundColor: "#0d171c"}}>
                {showTimer ? (<><div className="clueTimer" style={{width: `${currentPercentage}%`}} />
                <div className="pointsDisplay">{points}</div></>) : null}
                </div>
        )
    }

    return (
        <div className="clueBlock">
            <Timer />
            <div className="clueBox">{clue.title}</div>
        </div>
    )
}