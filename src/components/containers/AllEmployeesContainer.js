import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllInstructorsThunk } from "../../store/thunks";
import { AllInstructorsView } from "../views";

class AllInstructorsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllInstructors();
  }

  render() {
    return (
      <AllInstructorsView
        allInstructors={this.props.allInstructors}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allInstructors: state.allInstructors,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllInstructors: () => dispatch(fetchAllInstructorsThunk()),
  };
};

// Type check props;
AllInstructorsContainer.propTypes = {
  allInstructors: PropTypes.array.isRequired,
  fetchAllInstructors: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllInstructorsContainer);