import { ComponentType, useEffect } from "react";
import { useRouter } from "next/router";
import { compose } from "ramda";
import withAuth from "./with-auth";

const withPrivatePage = (Component: ComponentType) => {
  const WrappedComponent = ({
    isAuthenticated,
    ...props
  }: {
    isAuthenticated?: boolean;
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

export default compose(withAuth, withPrivatePage);
