"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@ui/components/input";
import { Separator } from "@ui/components/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/tabs";
import { TooltipProvider } from "@ui/components/tooltip";
import { SquadNav } from "./nav";
import { SquadChat } from "./squad-chat";
import { SquadList } from "./squad-list";
import { Squad } from "../data";
import { useSquad } from "../use-squad";

interface SquadsProps {
  squads: Squad[];
}

export function Squads({ squads }: SquadsProps) {
  const [squad] = useSquad();

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex flex-row">
        <Tabs defaultValue="all" className="w-1/4">
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>
          <TabsList className="mx-4 mb-2 space-between mr-auto items-center">
            <TabsTrigger value="all" className="relative">
              All
            </TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="disengaged">Disengaged</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="m-0">
            <SquadList items={squads} />
          </TabsContent>
          <TabsContent value="unread" className="m-0">
            <SquadList items={squads.filter((item) => !item.read)} />
          </TabsContent>
        </Tabs>
        <div className="flex-1">
          <SquadChat
            squad={squads.find((item) => item.id === squad.selected) || null}
          />
        </div>
      </div>
    </TooltipProvider>
  );
}
