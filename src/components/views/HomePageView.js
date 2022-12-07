import "./HomePageView.css";

import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

const HomePageView = () => {
	return (
		<div>
			{/* heading at the top */}
			<h1 className="text-center mt-5">
				Employees and Tasks
				<br></br>
				Relational Database
			</h1>
			<h6>Arifur Rahman, Fatin Iftekhar, & Irteza Ali</h6>

			{/* row of buttons to go to different pages (Instructors and Tasks) */}
			<Stack direction='horizontal' gap={3} id='topButtons'>
				<Link to={'/instructors'}> 
					<button>
						All Instructors
					</button>
				</Link>

				<Link to={'/courses'}>
					<button>
						All Courses
					</button>
				</Link>
			</Stack>
		</div>
	);    
}

export default HomePageView;
