const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Footer total={course.parts.reduce((acc, curr) => acc + curr.exercises, 0)}/>
    </div>
  )
}
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
      {parts.map(({name, exercises, id}) => <Part key={id} name={name} exercises={exercises}/>)}
    </div>
  )
}

const Footer = ({total}) => {
  return (
    <h4>Total # of Exercises: {total}</h4>
  )
}

export default Course