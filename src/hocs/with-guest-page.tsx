import { ComponentType, useEffect } from "react";
import { useRouter } from "next/router";
import withAuth from "./with-auth";
import { compose } from "ramda";

const withGuestPage = (Component: ComponentType) => {
  const WrappedComponent = ({
    isAuthenticated,
    ...props
  }: {
    isAuthenticated?: boolean;
  }) => {
    const { push } = useRouter();
    useEffect(() => {
      if (isAuthenticated) push("/user-profile");
    }, [isAuthenticated, push]);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = "withGuestPage";
  return WrappedComponent;
};

export default compose(withAuth, withGuestPage);
