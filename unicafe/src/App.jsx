import { useState } from 'react'

const StatisticLine = ({ name, val}) => {
  return (
    <>{name}: {val}</>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral
  return (
    <div>
      <h1>statistics</h1>
      {!good && !neutral && !bad ? 
        'No feedback given'
        : 
          <table>
            <tr>
              <td>
                <StatisticLine name='good' val={good} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine name='neutral' val={neutral} />
              </td>
            </tr>
             <tr>
              <td>
                <StatisticLine name='bad' val={bad} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine name='all' val={total} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine name='average' val={(good - bad) / total} /> %
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine name='positive' val={good / total} /> %
              </td>
            </tr>
          </ table>
        }
    </div>
  )
}

const Button = ({ onClick, name}) => {
  return (
    <div>
      <button onClick={() => onClick()}>{name}</button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} name='good' />
      <Button onClick={() => setNeutral(neutral + 1)} name='neutral' />
      <Button onClick={() => setBad(bad + 1)} name='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App