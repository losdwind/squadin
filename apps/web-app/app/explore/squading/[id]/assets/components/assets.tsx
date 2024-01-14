"use client";

import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveRestore,
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

import { cn } from "@ui/lib/utils";
import { Input } from "@ui/components/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@ui/components/resizable";
import { Separator } from "@ui/components/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/tabs";
import { TooltipProvider } from "@ui/components/tooltip";
import { AssetDisplay } from "../../assets/components/asset-display";
import { AssetList } from "../../assets/components/asset-list";
import { Nav } from "../../assets/components/nav";
import { Asset } from "../../assets/data";
import { useAsset } from "../../assets/use-asset";
import { Calendar } from "@ui/components/calendar";
interface AssetProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  assets: Asset[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Asset({
  accounts,
  assets,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: AssetProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [asset] = useAsset();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={(collapsed) => {
            setIsCollapsed(collapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              collapsed
            )}`;
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Squad",
                label: "128",
                icon: Inbox,
                variant: "default",
              },
              {
                title: "Private",
                label: "9",
                icon: File,
                variant: "ghost",
              },
              {
                title: "Listing",
                label: "",
                icon: Send,
                variant: "ghost",
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Moment",
                label: "92",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Todo",
                label: "72",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Person",
                label: "12",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Photos",
                label: "972",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Writings",
                label: "342",
                icon: AlertCircle,
                variant: "ghost",
              },
              {
                title: "Music",
                label: "128",
                icon: MessagesSquare,
                variant: "ghost",
              },
              {
                title: "Shorts",
                label: "8",
                icon: ShoppingCart,
                variant: "ghost",
              },
            ]}
          />

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiersStyles={{
              disabled: { fontSize: "75%" },
              caption: { color: "red" },
            }}
            className="rounded-md border"
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inscriptions</h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All Assets
                </TabsTrigger>
                <TabsTrigger
                  value="transferred"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Transferred
                </TabsTrigger>
                <TabsTrigger
                  value="deployed"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Deployed
                </TabsTrigger>
                <TabsTrigger
                  value="minted"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  minted
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              <AssetList items={assets} />
            </TabsContent>
            <TabsContent value="transferred" className="m-0">
              <AssetList items={assets.filter((item) => !item.status)} />
            </TabsContent>

            <TabsContent value="minted" className="m-0">
              <AssetList
                items={assets.filter((item) => item.address.endsWith("a"))}
              />
            </TabsContent>
            <TabsContent value="deployed" className="m-0">
              <AssetList
                items={assets.filter((item) => item.address.endsWith("3"))}
              />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <AssetDisplay
            asset={
              assets.find((item) => item.transaction_id === asset.selected) ||
              null
            }
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
