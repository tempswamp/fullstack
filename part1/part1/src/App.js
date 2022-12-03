const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      
      <p>
        <Content part={part1} exercise={exercises1} />
        <Content part={part2} exercise={exercises2}/>
        <Content part={part3} exercise={exercises3} />
      </p>
      <p><Total exercise1={exercises1} exercises2={exercises2} exercises3={exercises3}></Total></p>
      
    </div>
  )
}

const Header = (input) => {
  return (<h1>{input.course}</h1>)
}

const Content = (input) => {
  return (<p>{input.part}: {input.exercise}</p>)
}

const Total = (input) => {
  return (<p>Number of exercises:  {input.exercise1 + input.exercises2 + input.exercises3}</p>)
}

export default App;
