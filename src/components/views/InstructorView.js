

const InstructorView = (props) => {
  const {instructor} = props;
  return (
    <div>      
      <h1>{instructor.firstname}</h1>
      <p>{instructor.department}</p>
      <ul>
      {instructor.courses.map( course => {
        return (
          <li key={course.id}>{course.title}</li>
        );
      })}
      </ul>
    </div>
  );

};

export default InstructorView;