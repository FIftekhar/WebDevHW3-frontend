import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Heading from "../Heading";

const AllEmployeesView = (props) => {
	if (!props.allEmployees.length) {
		return (
			<div>
				<Heading />
				<Link to={`/newemployee`}>
					<button>Add New Employee</button>
				</Link>
				<div id="spacing"></div>
				There are no employees.
			</div>
		)
	}

  return (
    <div>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{employee.department}</p>
        </div>
        );

      })}
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;