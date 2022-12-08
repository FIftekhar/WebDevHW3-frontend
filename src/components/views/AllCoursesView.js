import { Link } from "react-router-dom";
import Heading from "../Heading";

const AllCoursesView = (props) => {
	let {courses, deleteCourse} = props;
	//courses = [{id: 300, title: "hello"}]

	return (
		<div>
			<Heading/>

			{
				!!courses.length ? // if there are courses, print all the courses
				<>{courses.map((course) => {
					let title = course.title;
					return (
						<div key={course.id}>
							<Link to={`/course/${course.id}`}>
								<h1>{title}</h1>
							</Link>
							<button onClick={() => deleteCourse(course.id)}>Delete</button>
						</div>
					);
				}
				)}</>
				// if the list of courses is empty, return this message
				:<>
					<p>There are no courses yet!</p>
				</>
			}
			<Link to={`/newcourse`}>
				
				<button>Add New Course</button>
			</Link>
		</div>
	);
};

export default AllCoursesView;