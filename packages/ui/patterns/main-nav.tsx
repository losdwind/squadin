"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@ui/config/site";
import { cn } from "@ui/lib/utils";
import { Icons } from "@ui/patterns/icons";
import { Badge } from "@ui/components/ui/badge";
import { buttonVariants } from "@ui/components/ui/button";

import { PageActions } from "./page-header";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex md:items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="docs.squadin.xyz"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="docs.squadin.xyz/whitepaper"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Whitepaper
        </Link>
        <Link
          href="docs.squadin.xyz/changelog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Activities
        </Link>
      </nav>
    </div>
  );
}