import "@ui/styles/globals.css";
import { Metadata } from "next";
import Link from "next/link";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@ui/lib/utils";
import { Announcement } from "@ui/patterns/announcement";
import { AppNav } from "@ui/patterns/app-nav";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@ui/patterns/page-header";
import { Search } from "@ui/patterns/search";
import { UserNav } from "@ui/patterns/user-nav";
import { Button, buttonVariants } from "@ui/components/button";
import { ThemeProvider } from "@ui/patterns/providers";
import { fontSans } from "@ui/lib/fonts";
import { TailwindIndicator } from "ui/patterns/tailwind-indicator";
import { Toaster } from "@ui/components//sonner";
import { Analytics } from "@ui/patterns/analytics";
export const metadata: Metadata = {
  title: "Squadin Web App",
  description: "Find your squad members and grow to monitize your team work",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative h-screen bg-background overflow-hidden">
                <main className="">
                  <div className="container relative mt-8">
                    <div className="rounded-[0.5rem] border bg-background shadow-md">
                      <section>
                        <div className="border-b">
                          <div className="flex h-16 items-center px-4">
                            <Link href={"www.squadin.xyz"}>
                              <span className="text-3xl font-bold">
                                SquadIn
                              </span>
                            </Link>
                            <AppNav className="mx-6" />
                            <div className="ml-auto flex items-center space-x-4">
                              <Button>
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Create
                              </Button>
                              <Search />
                              <UserNav />
                            </div>
                          </div>
                        </div>
                      </section>
                      {children}
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <TailwindIndicator />
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
