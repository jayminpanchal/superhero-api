import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSuperHeroProfileWatcher } from "../../store/actions";
import Profile from "./view";

function mapStateToProps(state) {
  return {
    superHero: state.SuperHero.superHeroProfile,
    isLoader: state.Loader.isLoader,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getSuperHeroProfileWatcher }, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
