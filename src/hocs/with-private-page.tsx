import { getIsAuthenticated } from "@/features/authentication/authentication-reducer";
import { ComponentType, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useRouter } from "next/router";

const withPrivatePage = (Component: ComponentType) => {
  const WrappedComponent = ({
    isAuthenticated,
    ...props
  }: {
    isAuthenticated: boolean;
  }) => {
    const { push } = useRouter();
    useEffect(() => {
      if (!isAuthenticated) push("/sign-in");
    }, [isAuthenticated, push]);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = "withPrivatePage";
  return WrappedComponent;
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default compose(connect(mapStateToProps), withPrivatePage);
