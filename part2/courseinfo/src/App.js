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
      },
      {
        name: 'Foobar course',
        exercises: 2,
        id: 4
      }
    ]
  }

  const Course = ({ course }) => {
    return(
      <div>
        <Header input={course} />
        <Content input={course.parts} />
        <Total input={course.parts} />
      </div>
    )
  }

  const Header = ({ input }) => {
    return (<h1>{input.name}</h1>)
  }

  const Content = ({ input }) => {
    return(
      <div>{input.map((part) => ( <Part id={part.id} name={part.name} exercises={part.exercises} /> ))}
      </div>
    )
  }

  const Part = ({ name, exercises }) => {
    return(<div>{name}: {exercises}</div>)
  }

  const Total = ({ input }) => {
    const total = input.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0);
  
    return(<b>Total of {total} exercises</b>)
  }
  
  return <Course course={course} />
}


export default App