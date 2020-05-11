import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { searchSuperHerosWatcher } from "../../store/actions";
import Dashboard from "./view";

function mapStateToProps(state) {
  return {
    superheros: state.SuperHero.superheros,
    isLoader: state.Loader.isLoader,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ searchSuperHerosWatcher }, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
