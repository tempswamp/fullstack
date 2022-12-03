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
        <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3}/>
        <Total exercise1={exercises1} exercises2={exercises2} exercises3={exercises3}></Total></p>
    </div>
  )
}

const Header = (input) => {
  return (<h1>{input.course}</h1>)
}

const Content = (input) => {
  return (<div>
      <Part part={input.part1} exercise={input.exercise1}/>
      <Part part={input.part2} exercise={input.exercise2}/>
      <Part part={input.part3} exercise={input.exercise3}/>
    </div>)}

const Part = (input) => {
  return (<p>{input.part}: {input.exercise}</p>)
}

const Total = (input) => {
  return (<div>Number of exercises:  {input.exercise1 + input.exercises2 + input.exercises3}</div>)
}

export default App;
