import React, { useState } from 'react'; 
//import ReactDOM from 'react-dom';
import {FaRegHandRock, FaRegHandScissors, FaRegHandPaper} from "react-icons/fa"

import './App.css';


function App() {

  const [computerChoice, setComputerChoice] =useState("");
  const [userChoice, setUserChoice]=useState("");
  const [computerPoints, setComputerPoints] = useState(0)
  const [userPoints, setUserPoints]= useState(0)

const computerChoices=["rock", "paper","scissor"];

const generateRandom=()=>{
  const index= Math.floor(Math.random()*computerChoices.length)
  //console.log(index);

  const randomCompValue=computerChoices[index]
  setComputerChoice(randomCompValue)
  //console.log(randomCompValue);

  if ((userChoice === "rock" && randomCompValue === "paper") || (userChoice === "paper" && randomCompValue === "scissor") || 
  (userChoice === "scissor" && randomCompValue === "rock")){
    setComputerPoints(computerPoints+1)
  }
  else if ((randomCompValue === "rock" && userChoice === "paper") || (randomCompValue === "paper" && userChoice === "scissor") || 
  (randomCompValue === "scissor" && userChoice === "rock")){
    setUserPoints(userPoints+1)
  }
  else{
    setComputerPoints(computerPoints)
    setUserPoints(userPoints)
  }



}

  return (
    <div className="bgContainer">
      <h1 className="main-head">Rock paper scissor</h1>
        <div className="App">
        
        <div className="secondContainer">
          <h2>Computer Choice: {computerChoice}</h2>
          <h2>User Choice: {userChoice}</h2>
          <div class="iconsBg">
            <FaRegHandRock className="icons" onClick={() => setUserChoice("rock")}/>
            <FaRegHandPaper className="icons" onClick={() => setUserChoice("paper")}/>
            <FaRegHandScissors className="icons" onClick={() => setUserChoice("scissor")}/>
          </div>
          <button className="btn btn-primary" onClick={generateRandom}>Play</button>

          <h2>User Points: {userPoints}</h2>
          <h2>Computer Points: {computerPoints}</h2>

          {userPoints === 10 && <div> <h1 className="winnerMsg">User won!!!!</h1></div>}
          {computerPoints === 10 && <div> <h1 className="winnerMsg">Computer won!!!!</h1></div>}
        </div>
      </div>
    </div> 
  );
}

export default App;
