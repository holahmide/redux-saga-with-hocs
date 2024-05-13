import { FormEvent } from "react";
import SignInComponent from "./authentication-component";
import { getAuthenticationIsLoading, login } from "./authentication-reducer";
import { RootState } from "@/redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  isAuthenticating: getAuthenticationIsLoading(state),
});

const mapDispatchToProps = { login };

const connector = connect(mapStateToProps, mapDispatchToProps);

type SignInContainerPropsFromRedux = ConnectedProps<typeof connector>;

const SignInContainer = ({
  isAuthenticating,
  login,
}: SignInContainerPropsFromRedux) => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };

  return (
    <SignInComponent onSubmit={onSubmit} isAuthenticating={isAuthenticating} />
  );
};

export default connector(SignInContainer);
