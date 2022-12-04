const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const Course = ({ course }) => {
    return(
      <div>
        <Header input={course.name} />
        <Content input={course.parts} />
      </div>
    )
  }

  const Header = ({ input }) => {
    return (<h1>{input}</h1>)
  }

  const Content = ({ input }) => {
    return(
      <div>{input.map((part) => ( <Part key={part.id} name={part.name} exercises={part.exercises} /> ))}
      </div>
    )
  }

  const Part = ({ name, exercises }) => {
    return(<div>{name}: {exercises}</div>)
  }

  return <Course course={course} />
}





export default App