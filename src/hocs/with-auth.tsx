import { getIsAuthenticated } from "@/features/authentication/authentication-reducer";
import { RootState } from "@/redux/root-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps);
