import React, { useState } from 'react';
import Statistics from './Statistics';

const Header = () => {
  return (<div><h1>give feedback</h1></div>)
}

const Button = (props) => {
  return (<button onClick={props.handleClick}>{props.text}</button>)
}

const Display = (props) => {
  return (

    <div>
      <h1>statistics</h1>
      {
        (props.all === 0) ? (<p>No feedback given</p>) : (<Statistics good={props.good} neutral={props.neutral} bad={props.bad} all={props.all} average={props.average} positive={props.positive}></Statistics>)
      }
    </div >
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [points, setPoints] = useState(0)



  const addGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setPoints(points + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setPoints(points - 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setPoints(points + 0)
  }



  return (
    <div>
      <Header></Header>
      <br />
      <Button handleClick={addGood} text="good" ></Button>
      <Button handleClick={addNeutral} text="neutral" ></Button>
      <Button handleClick={addBad} text="bad"></Button>
      <br />
      <Display good={good} neutral={neutral} bad={bad} all={all} average={points / all} positive={good / all} ></Display>
    </div>
  )
}

export default App