import { getIsAuthenticated } from "@/features/authentication/authentication-reducer";
import { RootState } from "@/redux/root-reducer";
import { compose } from "ramda";
import { ComponentType } from "react";
import { connect } from "react-redux";

const withAuth = (Component: ComponentType) => {
  const WrappedComponent = (props: any) => {
    return <Component {...props} />;
  };

  WrappedComponent.displayName = "withAuth";
  return WrappedComponent;
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default compose(connect(mapStateToProps), withAuth);
