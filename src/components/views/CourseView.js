const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>
    </div>
  );

};

export default CourseView;