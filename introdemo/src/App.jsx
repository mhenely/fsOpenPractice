const Hello = ({ name, age }) => {
  return (
    <div>
      <p>Hello {name}, you are {age} years old!</p>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Greetings!</h1>
      <Hello name='Joker' age={10} />
      <Hello name='Fitz' age={7} />
    </div>
  )
}


export default App