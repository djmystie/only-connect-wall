export default function ControlBar({round, setRound}){
    return (
        <div className="controlBar">
            <div className="button spacer" onClick={()=>setRound("one")}>Play Round One</div>
            <div className="button spacer" onClick={()=>setRound("two")}>Play Round Two</div>
            <div className="button spacer" onClick={()=>setRound("wall")}>Play Wall</div>
            <div className="button spacer" onClick={()=>setRound("vowels")}>Play Missing Vowels</div>
        </div>
    )
}