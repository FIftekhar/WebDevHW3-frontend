import { Link } from "react-router-dom";
import Heading from "../Heading";

const AllCoursesView = (props) => {
	let {courses, deleteCourse} = props;
	//courses = [{id: 300, title: "hello"}]

	return (
		<div>
			<Heading/>

			<Link to={`/newtask`}>
				
				<button>Add New Task</button>
			</Link>
			<div id="spacing"></div>
			{
				!!courses.length ? // if there are courses, print all the courses
				<>{courses.map((course) => {
					let title = course.title;
					return (
						<div key={course.id}>
							<Link to={`/task/${course.id}`}>
								<h1>{title}</h1>
							</Link>
							<button onClick={() => deleteCourse(course.id)}>Delete</button>
						</div>
					);
				}
				)}</>
				// if the list of courses is empty, return this message
				:<>
					<p>There are no tasks yet!</p>
				</>
			}
			
		</div>
	);
};

export default AllCoursesView;