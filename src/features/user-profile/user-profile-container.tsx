import { connect, ConnectedProps } from "react-redux";
import UserProfileComponent from "./user-profile-component";
import {
  fetchProfile,
  getProfile,
  getProfileIsLoading,
} from "./user-profile-reducer";
import { useEffect } from "react";
import { RootState } from "@/redux/root-reducer";
import { logout } from "../authentication/authentication-reducer";

const mapStateToProps = (state: RootState) => ({
  profile: getProfile(state),
  isLoading: getProfileIsLoading(state),
});

const mapDispatchToProps = { fetchProfile, logout };

const connector = connect(mapStateToProps, mapDispatchToProps);

const UserProfileContainer = ({
  fetchProfile,
  ...rest
}: ConnectedProps<typeof connector>) => {
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return <UserProfileComponent {...rest} />;
};

export default connector(UserProfileContainer);
