import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b backdrop-blur-sm bg-white/80 dark:bg-black/50 sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold">
        Togeda
      </Link>

      <div className="flex items-center gap-3">
        <Link href="/login" className="text-sm hover:underline">
          Login
        </Link>
        <Link href="/signup">
          <Button size="sm">Sign up</Button>
        </Link>
      </div>
    </header>
  );
}
