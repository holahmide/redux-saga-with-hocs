import SignInContainer from "@/features/authentication/authentication-container";
import withGuestPage from "@/hocs/with-guest-page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SignInPage = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <SignInContainer />
    </main>
  );
};

export default withGuestPage(SignInPage);
