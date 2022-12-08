import "./HomePageView.css";
import Heading from "../Heading";

import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

const HomePageView = () => {
	console.log("in here ")
	return (
		<div>
			<Heading/>

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
