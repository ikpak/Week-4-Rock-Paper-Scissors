import React, {useState} from 'react';
import './App.css';
import Box from './components/Box'

const choices = {
  fire: {
    name: "fire",
    url: "https://img.pokemondb.net/artwork/large/flareon.jpg"
  },
  grass: {
    name: "grass",
    url: "https://img.pokemondb.net/artwork/large/leafeon.jpg"
  },
  water: {
    name: "water",
    url: "https://img.pokemondb.net/artwork/large/vaporeon.jpg"
  }
}

function App() {
  // let userC = {}
  // let computerC = {}
  let [userC, setUserC] = useState({})
  let [computerC, setComputerC] = useState({})
  let [previousWinner, setPreviousWinner] = useState(null)
  
  const [gameHistory, setGameHistory] = useState([])

  let result = ""

  const judgement = (user,computer) => {
    if(user.name === "fire") {
      result = computer.name === "grass" ? "Won" : "Lost"  
    }
    if(user.name === "grass") {
      result = computer.name === "water" ? "Won" : "Lost"
    }
    if(user.name === "water") {
      result = computer.name === "fire" ? "Won" : "Lost"
    }
    if(user.name === computer.name) result = "Tied"
    console.log(result)

    if(result === "Won") {
      setPreviousWinner("You")
    } else if(result === "Lost") {
      setPreviousWinner("Computer")
    } else {
      setPreviousWinner("Tied")
    }
  }

  const onplay = (userChoice) => {
    console.log("User choice:", userC)
    
    let itemArray = Object.keys(choices)
    let randomNum = Math.floor(Math.random() * itemArray.length)
    let itemName = itemArray[randomNum]

    console.log("Computer choice:", computerC)
    judgement(choices[userChoice], choices[itemName])
    setComputerC(choices[itemName])
    setUserC(choices[userChoice])

    gameHistory.push(result)
    setGameHistory(gameHistory)
  }

  return (
    <div className="App">
      <Box name="You" choice={userC} previousWinner={previousWinner} />
      <div className="buttons">
        <h1>Choose your type:</h1>
        <button className="fire-btn" onClick = {() => onplay("fire")}>Fire</button>
        <button className="grass-btn" onClick = {() => onplay("grass")}>Grass</button>
        <button className="water-btn" onClick = {() => onplay("water")}>Water</button>
        <div className="history">
          <h3>History:</h3>
          <ol>
            {gameHistory.map(result => {
              return <li>{result}</li>
            })}
          </ol>
        </div>
      </div>
      <Box name="Computer" choice={computerC} previousWinner={previousWinner} />
    </div>
  );
}

export default App;

// rewritten using class
// export default class App extends Component {
//   constructor(props) {
//     super(props) <-- set props for parents
//     this.state = {
//       userC: {},
//       computerC: {}  
//     }
//   }
//
//   onplay = (userChoice) => {
//     let userC = 
//     let itemArray = Object.keys(choices)
//     let randomNum = Math.floor(Math.random() * itemArray.length)
//     let itemName = itemArray[randomNum]
//     
//     this.setState({userC: choices[userChoice], computerC: choices[itemName]})
//   }
//   
//   render() {
//     return (
//       <div className="App">
//         <Box winner={true} name="Computer" imgUrl={this.choices.fire} />
//         <Box winner={false} name="You" imgUrl={this.choices.grass}  />
//       </div>
//     )
//   }
// }
