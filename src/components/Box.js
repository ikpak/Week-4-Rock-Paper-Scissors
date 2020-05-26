import React from 'react'

export default function Box(props) {

    console.log("This is props", props)
    const DEFAULT_IMG = "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";

    const won = props.name === props.previousWinner
    let className
    const hasPreviousGame = props.previousWinner === "Computer" || props.previousWinner === "You"
    if(hasPreviousGame) {
        className = won ? "winner" : "loser"
    }

    let prompt
    if(won) {
        prompt = "Won"
        className = won ? "winner" : "loser"
    } else if(props.previousWinner === "Tied") {
        prompt = "Tied"
    } else if(props.previousWinner === null) {
        console.log("am i here?")
        prompt = "Start"
    } else {
        prompt = "Lost"
    }

    return (
        <div className={`box ${className}`}>
            <h2>{props.name}</h2>
            <img src={props.choice.url || DEFAULT_IMG} alt={props.choice.name} />
            <h1>{prompt}</h1>
        </div>
    )
}

// rewritten using class
// export default class 
