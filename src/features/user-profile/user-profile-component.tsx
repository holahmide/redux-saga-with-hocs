import { UserProfile } from "./user-profile-types";

type UserProfileComponentProps = {
  profile: UserProfile;
  isLoading: boolean;
  logout: () => void;
};

const UserProfileComponent = ({
  profile: { name, username, email, phone, website },
  isLoading,
  logout,
}: UserProfileComponentProps) => {
  return (
    <div>
      <h1 className="text-2xl mb-4">User Profile</h1>

      {isLoading ? (
        "Loading Profile..."
      ) : (
        <div>
          <p>
            Name: <b>{name}</b>
          </p>
          <p>
            Username: <b>{username}</b>
          </p>
          <p>
            Email: <b>{email}</b>
          </p>
          <p>
            Phone: <b>{phone}</b>
          </p>
          <p>
            Website: <b>{website}</b>
          </p>
        </div>
      )}

      <button
        onClick={logout}
        className="bg-red-800 hover:bg-red-600 transition-all text-white w-full max-w-xs mx-auto py-2 mt-2"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfileComponent;
