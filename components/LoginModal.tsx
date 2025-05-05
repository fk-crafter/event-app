import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";

export function LoginModal() {
  return (
    <div className="relative z-10 max-w-sm w-full bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 text-center space-y-4 border border-border">
      <div className="text-2xl font-semibold">Welcome to Togeda</div>

      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </Button>

        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
        >
          <FaGithub className="text-xl" />
          Continue with GitHub
        </Button>

        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
        >
          <FaApple className="text-xl" />
          Continue with Apple
        </Button>

        <Button className="w-full">Continue with email</Button>
      </div>
    </div>
  );
}
