import { Link } from "react-router-dom";
import Heading from "../Heading";

const AllTasksView = (props) => {
	let {tasks, deleteTask} = props;
	//courses = [{id: 300, title: "hello"}]

	return (
		<div>
			<Heading/>

			<Link to={`/newtask`}>
				
				<button>Add New Task</button>
			</Link>
			<div id="spacing"></div>
			{
				!!tasks.length ? // if there are courses, print all the courses
				<>{tasks.map((task) => {
					let description = task.description;
					return (
						<div key={task.id}>
							<Link to={`/task/${task.id}`}>
								<h1>{description}</h1>
							</Link>
							<button onClick={() => deleteTask(description.id)}>Delete</button>
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

export default AllTasksView;