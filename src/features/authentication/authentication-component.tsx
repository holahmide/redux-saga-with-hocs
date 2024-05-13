import Link from "next/link";
import { FormEvent } from "react";

type SignInComponentProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isAuthenticating: boolean;
};

const SignInComponent = ({
  onSubmit,
  isAuthenticating,
}: SignInComponentProps) => {
  return (
    <div>
      <h1 className="text-2xl my-8">Sign In Form</h1>

      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          className="w-72 p-2 rounded-md bg-transparent border-white border"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-72 p-2 rounded-md bg-transparent border-white border"
        />
        <button
          disabled={isAuthenticating}
          type="submit"
          className="bg-neutral-600 py-3"
        >
          {isAuthenticating ? "Loading" : "Sign In"}
        </button>
      </form>

      <Link href="/" className="underline text-blue-700 my-4 block">
        Go Home
      </Link>
    </div>
  );
};

export default SignInComponent;
