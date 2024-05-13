import DynamicClientSection from "@/components/DynamicClientSection";
import UserProfileContainer from "@/features/user-profile/user-profile-container";
import withPrivatePage from "@/hocs/with-private-page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const UserProfilePage = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <DynamicClientSection>
        <UserProfileContainer />
      </DynamicClientSection>
    </main>
  );
};

export default withPrivatePage(UserProfilePage);
