const Header = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name}: {exercises}</p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({name, exercises}) => <Part name={name} exercises={exercises}/>)}
    </div>
  )
}

const Footer = ({total}) => {
  console.log(total)
  return (
    <h4>Total # of Exercises: {total}</h4>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Footer total={course.parts.reduce((acc, curr) => acc + curr.exercises, 0)}/>
    </div>
  )
}

export default App