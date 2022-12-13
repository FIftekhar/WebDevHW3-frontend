const TaskView = (props) => {
	const { course: task } = props;
	return (
		<div>
		<h1>{task.description}</h1>
		{task.employee ? <h3>{task.employee.firstname + " " + task.instructor.lastname}</h3>: <h3>employee</h3>}
		</div>
	);

};

export default TaskView;