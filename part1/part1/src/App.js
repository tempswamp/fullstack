const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

const Header = (input) => {
  return (<h1>{input.course}</h1>)
}

const Content = (input) => {
  return(<div><Part part={input.parts[0].name} exercise={input.parts[0].exercises}/>
  <Part part={input.parts[1].name} exercise={input.parts[1].exercises}/>
  <Part part={input.parts[2].name} exercise={input.parts[2].exercises}/>
  </div>)
}

const Part = (input) => {
  return (<p>{input.part}: {input.exercise}</p>)
}

const Total = (input) => {
  return (<div>Number of exercises: {input.parts[0].exercises + input.parts[1].exercises + input.parts[2].exercises}</div>)
}

export default App;
