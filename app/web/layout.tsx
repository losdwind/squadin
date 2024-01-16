import { Metadata } from "next";
import Link from "next/link";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Announcement } from "@/components/announcement";
import { AppNav } from "@/components/app-nav";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Search } from "@/components/search";
import { UserNav } from "@/components/user-nav";
import { Button, buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Squadin Web App",
  description: "A decentralized Social Media App for squad members",
};

interface WebAppLayoutProps {
  children: React.ReactNode;
}

export default function WebAppLayout({ children }: WebAppLayoutProps) {
  return (
    <div className="container relative mt-8">
      <div className="rounded-[0.5rem] border bg-background shadow-md">
        <section>
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              {/* <TeamSwitcher /> */}
              <span className="text-3xl font-bold">SquadIn</span>
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
  );
}
