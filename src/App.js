import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Router
import { Switch, Route } from "react-router-dom";

//Components
import {
	HomePageContainer,
	InstructorContainer,
	CourseContainer,
	AllInstructorsContainer,
	AllCoursesContainer,
	NewCourseContainer
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

				<Route exact path="/" component={AllCoursesContainer} /> {/* starts on all tasks view */}
				<Route exact path="/home" component={HomePageContainer} /> {/* shows normal home page */}
				<Route exact path="/instructors" component={AllInstructorsContainer} /> {/* shows all employees */}
				<Route exact path="/instructors/:id" component={InstructorContainer} /> {/* shows single employee */}
				<Route exact path="/courses" component={AllCoursesContainer} /> {/* shows all tasks */}
				<Route exact path="/course/:id" component={CourseContainer} /> {/* shows single task */}

			</Switch>        
		</div>
	);
}

export default App;

