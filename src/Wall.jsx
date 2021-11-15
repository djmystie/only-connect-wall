import './Wall.css'
import { useState, useEffect } from 'react'
import _ from 'lodash'
import {
    lion,
    water,
    twoReeds,
    twistedFlax,
    eyeOfHorus,
    hornedViper
} from './questions'

export default function Wall(){
    const [wallData, setWallData] = useState(_.shuffle(lion))
    const [foundData, setFoundData] = useState([])
    const [selected, setSelected] = useState([])
    const [found, setFound] = useState([])
    const [groupChosen, setGroupChosen] = useState([])
    const [lives, setLives] = useState(3)
    const [clock, setClock] = useState(180)
    const [startWall, setStartWall] = useState(false)


    useEffect(() => {
        if(startWall && clock > 0 && lives > 0 && found.length < 4){
            const timer = setTimeout(() => {
                setClock(clock => clock - 1)
              }, 1000);
              return () => clearTimeout(timer);
        }
    },[startWall, clock, found, lives])

    const resolveWall = () => {
        let allGroups = [1,2,3,4]
        let unresolved = allGroups.filter(a => !found.includes(a))
        unresolved.forEach(group => {
            let foundWallData = wallData.filter(a => a.group === group)
                setFoundData(foundData => ([...foundData, ...foundWallData]))
        })
        setWallData([])
        setFound([1,2,3,4])
    }


    const Block = ({block, click}) => (
        <div className={ found.includes(block.group) ? `wallBlock group${block.group}` : selected.includes(block.id) ? "wallBlock selected" : "wallBlock"} onClick={found.includes(block.group) || lives === 0 || !startWall ? null : ()=>click(block)}>
            {startWall ? block.title : ""}
        </div>
    )

    const click = (block) => {
        if(selected.includes(block.id)){
            setSelected(selected => selected.filter(i => i !== block.id))
            return null
        }
        let currentGroups = [...groupChosen, block.group]
        setGroupChosen(groupChosen => [...groupChosen, block.group])
        if(selected.length < 3){
            setSelected(selected => ([...selected, block.id]))
        } else {
            let allFound = false
            if(currentGroups.every( (val, i, arr) => val === arr[0] )){
                allFound = [...found, block.group].length === 3
                setFound(found => (allFound ? [1,2,3,4] : [...found, block.group]))
                let currentWallData = wallData.filter(a => a.group !== block.group)
                let foundWallData = wallData.filter(a => a.group === block.group)
                setFoundData(foundData => ([...foundData, ...foundWallData]))
                setWallData(currentWallData)
            } 
            console.log(allFound)
            if(found.length > 1 && !allFound){
                setLives(lives => lives - 1)
            }
            setSelected([])
            setGroupChosen([])
            
        }
    }

    const DisplayLives = () => {
        return (
            <div className="lives">
                {found.length > 1 ? `Lives remaining: ${lives}` : null}
            </div>
        )
    }

    const StartGame = () => <div className="lives"><div className="button" onClick={()=>setStartWall(true)}>Start Wall</div></div>

    const Timer = () => {
        let currentPercentage = (clock/180)*100
        return (
                <div className="timerContainer">
                <div className="timer" style={{width: `${currentPercentage}%`}} />
                </div>
        )
    }

    const Resolve = () => <div className="lives"><div className="button" onClick={()=>resolveWall()}>Resolve Wall</div></div>

    return (
        <div className="wallContainer">
            <div>
        <div className="wall">
            {foundData.map((data)=>(
                <Block key={data.id} block={data} click={click} />
            ))}
            {wallData.map((data)=>(
                <Block key={data.id} block={data} click={click} />
            ))}
        </div>
        <div className="bottomContainer">
            {startWall ? lives === 0 || clock === 0 ? <Resolve /> : <DisplayLives /> : <StartGame />}
            <Timer />
        </div>
        </div>
        </div>
    )
}