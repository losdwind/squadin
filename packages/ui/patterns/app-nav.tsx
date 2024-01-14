"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@ui/lib/utils";

const appModules = [
  {
    name: "Explore",
    href: "/explore/squading",
  },
  {
    name: "Squads",
    href: "/squads",
  },
];

export function AppNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav>
      <div className={cn("flex items-center", className)} {...props}>
        {appModules.map((example, index) => (
          <Link
            href={example.href}
            key={example.href}
            className={cn(
              "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
              pathname?.startsWith(example.href) ||
                (index === 0 && pathname === "/")
                ? "bg-muted font-medium text-primary"
                : "text-muted-foreground"
            )}
          >
            {example.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
