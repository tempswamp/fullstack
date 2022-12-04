const Course = ({ course }) => {
    return(<div><Header input={course}/>
        <Content input={course.parts} />
        <Total input={course.parts} />
    </div>)
}

const Header = ({ input }) => {
    return( <h2>{input.name}</h2> )
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

  const Total = ({ input }) => {
    const total = input.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0);
  
    return(<b>Total of {total} exercises</b>)
  }

export default Course