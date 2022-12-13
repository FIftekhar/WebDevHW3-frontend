import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Router
import { Switch, Route } from "react-router-dom";

//Components
import {
	HomePageContainer,
	AllTasksContainer,
	AllEmployeesContainer,
	EmployeeContainer,
	TaskContainer,
	NewTaskContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
	return (
		<div className="App">
			<Switch>
				{/* <Route exact path="/" component={HomePageContainer} />
				<Route exact path="/instructors" component={AllInstructorsContainer} />
				<Route exact path="/instructor/:id" component={InstructorContainer} />
				<Route exact path="/courses" component={AllCoursesContainer} />
				<Route exact path="/newcourse" component={NewCourseContainer} />
				<Route exact path="/course/:id" component={CourseContainer} /> */}

				<Route exact path="/" component={AllTasksContainer} /> {/* starts on all tasks view */}
				<Route exact path="/home" component={HomePageContainer} /> {/* shows normal home page */}
				<Route exact path="/employees" component={AllEmployeesContainer} /> {/* shows all employees */}
				<Route exact path="/employee/:id" component={EmployeeContainer} /> {/* shows single employee */}
				<Route exact path="/tasks" component={AllTasksContainer} /> {/* shows all tasks */}
				<Route exact path="/task/:id" component={TaskContainer} /> {/* shows single task */}
				<Route exact path="/newtask" component={NewTaskContainer} />
			</Switch>        
		</div>
	);
}

export default App;

