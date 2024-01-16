"use client";

import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AccountSwitcher } from "@/app/web/squads/components/account-switcher";
import { SquadNav } from "@/app/web/squads/components/nav";
import { SquadChat } from "@/app/web/squads/components/squad-chat";
import { SquadList } from "@/app/web/squads/components/squad-list";
import { Squad } from "@/app/web/squads/data";
import { useSquad } from "@/app/web/squads/use-squad";

interface SquadsProps {
  squads: Squad[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Squads({
  squads,
  defaultLayout = [265, 655, 440],
  defaultCollapsed = false,
  navCollapsedSize,
}: SquadsProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [squad] = useSquad();

  return (
    <TooltipProvider delayDuration={0}>
      {/*<ResizablePanelGroup*/}
      {/*  direction="horizontal"*/}
      {/*  onLayout={(sizes: number[]) => {*/}
      {/*    document.cookie = `react-resizable-panels:layout=${JSON.stringify(*/}
      {/*      sizes*/}
      {/*    )}`*/}
      {/*  }}*/}
      {/*  className="h-full max-h-[800px] items-stretch"*/}
      {/*>*/}
      {/*  <ResizablePanel*/}
      {/*    defaultSize={defaultLayout[0]}*/}
      {/*    collapsedSize={navCollapsedSize}*/}
      {/*    collapsible={true}*/}
      {/*    minSize={15}*/}
      {/*    maxSize={20}*/}
      {/*    onCollapse={(collapsed) => {*/}
      {/*      setIsCollapsed(collapsed)*/}
      {/*      document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(*/}
      {/*        collapsed*/}
      {/*      )}`*/}
      {/*    }}*/}
      {/*    className={cn(*/}
      {/*      isCollapsed &&*/}
      {/*        "min-w-[50px] transition-all duration-300 ease-in-out"*/}
      {/*    )}*/}
      {/*  >*/}
      {/*    <SquadNav*/}
      {/*      isCollapsed={isCollapsed}*/}
      {/*      links={[*/}
      {/*        {*/}
      {/*          title: "Confidential",*/}
      {/*          label: "128",*/}
      {/*          icon: Inbox,*/}
      {/*          variant: "default",*/}
      {/*        },*/}

      {/*        {*/}
      {/*          title: "Disengaged",*/}
      {/*          label: "2",*/}
      {/*          icon: Trash2,*/}
      {/*          variant: "ghost",*/}
      {/*        },*/}
      {/*                      {*/}
      {/*          title: "Squading",*/}
      {/*          label: "5",*/}
      {/*          icon: File,*/}
      {/*          variant: "ghost",*/}
      {/*        },*/}
      {/*        {*/}
      {/*          title: "Out of reach",*/}
      {/*          label: "",*/}
      {/*          icon: Archive,*/}
      {/*          variant: "ghost",*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*    <Separator />*/}
      {/*    <SquadNav*/}
      {/*      isCollapsed={isCollapsed}*/}
      {/*      links={[*/}
      {/*        {*/}
      {/*          title: "Photos",*/}
      {/*          label: "972",*/}
      {/*          icon: Users2,*/}
      {/*          variant: "ghost",*/}
      {/*        },*/}
      {/*        {*/}
      {/*          title: "Writings",*/}
      {/*          label: "342",*/}
      {/*          icon: AlertCircle,*/}
      {/*          variant: "ghost",*/}
      {/*        },*/}
      {/*        {*/}
      {/*          title: "Music",*/}
      {/*          label: "128",*/}
      {/*          icon: MessagesSquare,*/}
      {/*          variant: "ghost",*/}
      {/*        },*/}
      {/*        {*/}
      {/*          title: "Videos",*/}
      {/*          label: "8",*/}
      {/*          icon: ShoppingCart,*/}
      {/*          variant: "ghost",*/}
      {/*        },*/}

      {/*      ]}*/}
      {/*    />*/}
      {/*  </ResizablePanel>*/}
      {/*  <ResizableHandle withHandle />*/}
      {/*  <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>*/}
      {/*    <Tabs defaultValue="all">*/}
      {/*      <div className="flex items-center px-4 py-2">*/}
      {/*        <h1 className="text-xl font-bold">Squads</h1>*/}
      {/*      </div>*/}
      {/*      <Separator />*/}
      {/*      <div className="bg-background`/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">*/}
      {/*        <form>*/}
      {/*          <div className="relative">*/}
      {/*            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />*/}
      {/*            <Input placeholder="Search" className="pl-8" />*/}
      {/*          </div>*/}
      {/*        </form>*/}
      {/*      </div>*/}
      {/*      <TabsContent value="all" className="m-0">*/}
      {/*        <SquadList items={squads} />*/}
      {/*      </TabsContent>*/}
      {/*      <TabsContent value="unread" className="m-0">*/}
      {/*        <SquadList items={squads.filter((item) => !item.read)} />*/}
      {/*      </TabsContent>*/}
      {/*    </Tabs>*/}
      {/*  </ResizablePanel>*/}
      {/*  <ResizableHandle withHandle />*/}
      {/*  <ResizablePanel defaultSize={defaultLayout[2]}>*/}
      {/*    <SquadChat*/}
      {/*      squad={squads.find((item) => item.id === squad.selected) || null}*/}
      {/*    />*/}
      {/*  </ResizablePanel>*/}
      {/*</ResizablePanelGroup>*/}
      <div className="flex flex-row">
        <Tabs defaultValue="all" className="w-1/4">
          {/*<div className="flex items-center px-4 py-2">*/}
          {/*  <h1 className="text-xl font-bold">Squads</h1>*/}
          {/*</div>*/}
          {/*<Separator />*/}
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
            <SquadList items={squads.filter((item) => item.status === "listed")} />
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
