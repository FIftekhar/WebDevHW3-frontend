import "./HomePageView.css";

import { Link } from 'react-router-dom';



const HomePageView = () => {
	return (
		<div>
		<h6>Employees and Tasks Relational Database</h6>
		<Link to={'/instructors'} > All Instructors </Link>
		<Link to={'/courses'} > All Courses </Link>
		
		</div>
	);    
}




export default HomePageView;
