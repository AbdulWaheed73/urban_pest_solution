import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bug } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-32 px-4 text-center">
      <Bug className="h-16 w-16 text-forest mb-6" />
      <h1 className="text-4xl font-bold text-charcoal mb-3">Page Not Found</h1>
      <p className="text-slate-mid mb-8 max-w-md">
        Looks like this page has been exterminated. Let&apos;s get you back to
        safety.
      </p>
      <Button render={<Link href="/" />} className="bg-forest hover:bg-forest-dark text-white">
        Return Home
      </Button>
    </div>
  );
}
