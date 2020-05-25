import React from 'react'

export default function Box(props) {
    return (

        <div className={`box ${props.winner ? 'winner' : 'loser'}`}>
            <h2>{props.name}</h2>
            <img src={props.imgUrl} alt={props.title} />
            <h1>{props.winner ? 'Won' : 'Lost'}</h1>
        </div>

    )
}
