const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part={part1.name} exercise={part1.exercises}/>
      <Content part={part2.name} exercise={part2.exercises}/>
      <Content part={part3.name} exercise={part3.exercises}/>
    </div>
  )
}

const Header = (input) => {
  return (<h1>{input.course}</h1>)
}

const Content = (input) => {
  return(<Part part={input.part} exercise={input.exercise}/>)
}

const Part = (input) => {
  return (<p>{input.part}: {input.exercise}</p>)
}

const Total = (input) => {
  return (<div>Number of exercises:  {input.exercise1 + input.exercises2 + input.exercises3}</div>)
}

export default App;
