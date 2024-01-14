import { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@ui/components/button";
import { ScrollArea, ScrollBar } from "@ui/components/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/select";
import { Separator } from "@ui/components/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/tabs";

import { SuqadInfo } from "../components/squad-card";
import { PodcastEmptyPlaceholder } from "../components/podcast-empty-placeholder";
import { Sidebar } from "../components/sidebar";
import { categories } from "../data/categories";
import { squads } from "../../squads/data";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Explore suqads that are gathering squad members, seek for marketing or listed on ranking list",
};

export default function SquadingPage() {
  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <div className="px-4 py-6 lg:px-8">
        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex flex-row items-center">
            <TabsList className="space-between mr-auto flex  flex-row items-center">
              <TabsTrigger value="all" className="relative">
                All
              </TabsTrigger>
              <TabsTrigger value="Sports">Sports</TabsTrigger>
              <TabsTrigger value="Hobby">Hobby</TabsTrigger>
              <TabsTrigger value="Startup">Startup</TabsTrigger>
              <TabsTrigger value="Game">Game</TabsTrigger>
              <TabsTrigger value="Study">Study</TabsTrigger>
              <TabsTrigger value="Travel">Travel</TabsTrigger>
              <TabsTrigger value="Diet">Diet</TabsTrigger>
            </TabsList>
            <div className="flex flex-row items-center gap-4">
              <p>Sort By</p>
              <Select defaultValue="subscribers">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Subscribers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="subscribers">Subscribers</SelectItem>
                  <SelectItem value="activeness">Activiness</SelectItem>
                  <SelectItem value="change">Change</SelectItem>
                  <SelectItem value="market_cap">Market Cap</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ScrollArea className="h-[900px] pr-4">
            <TabsContent value="all" className="border-none p-0 outline-none">
              <div className="relative">
                <div className="grid grid-cols-3 gap-4">
                  {squads.map((squad) => (
                    <Link href={`./squading/${squad.id}`}>
                      <SuqadInfo
                        key={squad.name}
                        squad={squad}
                        className=""
                        width={320}
                        height={320}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
}
