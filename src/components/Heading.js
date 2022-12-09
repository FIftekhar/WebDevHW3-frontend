import "./heading.css";
import { Link } from "react-router-dom";

const Heading = () => {
    return <div id="heading">
        {/* heading at the top */}
        <h1 className="text-center mt-5">Employees and Tasks</h1>
        <h3>Web Dev Homework Assignment #3</h3>
        <div id="spacing"></div>
        <h6>Arifur Rahman, Fatin Iftekhar, & Irteza Ali</h6>
        <div id="spacing"></div>

        <Link to={'/home'}>
			<button>
				Home Page
			</button>
		</Link>

        <hr id="heading-line"></hr>
    </div>;
};

export default Heading;