import { getIsAuthenticated } from "@/features/authentication/authentication-reducer";
import { ComponentType, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const withPublicPage = (Component: ComponentType) => {
  const WrappedComponent = ({
    isAuthenticated,
    ...props
  }: {
    isAuthenticated: boolean;
  }) => {
    const { push } = useRouter();
    useEffect(() => {
      if (isAuthenticated) push("/user-profile");
    }, [isAuthenticated, push]);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = "withPublicPage";
  return WrappedComponent;
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default compose(connect(mapStateToProps), withPublicPage);
