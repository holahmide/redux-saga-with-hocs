import withPublicPage from "@/hocs/with-public-page";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      Home Page
      <Link href="/sign-in" className="underline text-blue-700">
        Sign In
      </Link>
    </main>
  );
};

export default withPublicPage(Home);
