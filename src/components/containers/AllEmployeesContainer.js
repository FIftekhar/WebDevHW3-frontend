import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllEmployeesThunk } from "../../store/thunks";
import { AllEmployeesView } from "../views";

class AllEmployeesContainer extends Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchAllEmployees();
	}

	render() {
		return (
			<AllEmployeesView
				allEmployees={this.props.allEmployees}
			/>
		);
	}
}

// Map state to props;
const mapState = (state) => {
  return {
    allEmployees: state.allEmployees,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
  };
};

// Type check props;
AllEmployeesContainer.propTypes = {
  allEmployees: PropTypes.array.isRequired,
  fetchAllEmployees: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllEmployeesContainer);