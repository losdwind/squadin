import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/tabs";
import { CalendarDateRangePicker } from "./components/date-range-picker";
import { Overview } from "./components/overview";
import { RecentSales } from "./components/recent-sales";
import { squads } from "../../../squads/data";
import { AssetList } from "./assets/components/asset-list";
import { assets } from "./assets/data";
import { Separator } from "@ui/components/separator";
import { Search } from "lucide-react";
import { Input } from "@ui/components/input";
import * as React from "react";
import { AssetDisplay } from "./assets/components/asset-display";
import { ScrollArea } from "@ui/components/scroll-area";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of selected token",
};

export default function DashboardPage({ params }: { params: { id: string } }) {
  const squad = squads.find((squad) => squad.id === params.id);
  return (
    <div className="col-span-3 grid gap-8 px-4 py-6 lg:col-span-4 lg:border-l lg:px-8 ">
      <div className="justify-betwen flex flex-row items-center space-y-2 gap-8">
        <div className="flex flex-col gap-4 mr-auto">
          <h2 className="text-3xl font-bold tracking-tight">{squad.name}</h2>
          <h3 className="text-md font-medium tracking-tight">
            {squad?.description}
          </h3>
        </div>

        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="trade">Trades</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <ScrollArea className="h-[800px] ">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Market Cap*/}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Market Cap
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>

              {/*Price*/}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Price</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$23.41</div>
                  <p className="text-xs text-muted-foreground">
                    +191% from last month
                  </p>
                </CardContent>
              </Card>
              {/*holders*/}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Holders</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>

              {/*Subscribers*/}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscribers
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">115,730</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Trades</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Holders</CardTitle>
                  <CardDescription>
                    You top holders increased 40% holdings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="content">
            {/*<div>*/}
            {/*  <Tabs>*/}
            {/*    <div className="flex items-center px-4 py-2">*/}
            {/*      <h1 className="text-xl font-bold">Inscriptions</h1>*/}
            {/*      <TabsList className="ml-auto">*/}
            {/*        <TabsTrigger*/}
            {/*          value="all"*/}
            {/*          className="text-zinc-600 dark:text-zinc-200"*/}
            {/*        >*/}
            {/*          All Assets*/}
            {/*        </TabsTrigger>*/}
            {/*        <TabsTrigger*/}
            {/*          value="transferred"*/}
            {/*          className="text-zinc-600 dark:text-zinc-200"*/}
            {/*        >*/}
            {/*          Transferred*/}
            {/*        </TabsTrigger>*/}
            {/*        <TabsTrigger*/}
            {/*          value="deployed"*/}
            {/*          className="text-zinc-600 dark:text-zinc-200"*/}
            {/*        >*/}
            {/*          Deployed*/}
            {/*        </TabsTrigger>*/}
            {/*        <TabsTrigger*/}
            {/*          value="minted"*/}
            {/*          className="text-zinc-600 dark:text-zinc-200"*/}
            {/*        >*/}
            {/*          minted*/}
            {/*        </TabsTrigger>*/}
            {/*      </TabsList>*/}
            {/*    </div>*/}
            {/*    <Separator />*/}
            {/*    <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">*/}
            {/*      <form>*/}
            {/*        <div className="relative">*/}
            {/*          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />*/}
            {/*          <Input placeholder="Search" className="pl-8" />*/}
            {/*        </div>*/}
            {/*      </form>*/}
            {/*    </div>*/}
            {/*    <TabsContent value="all" className="m-0">*/}
            {/*      <AssetList items={assets} />*/}
            {/*    </TabsContent>*/}
            {/*    <TabsContent value="transferred" className="m-0">*/}
            {/*      <AssetList items={assets.filter((item) => !item.status)} />*/}
            {/*    </TabsContent>*/}

            {/*    <TabsContent value="minted" className="m-0">*/}
            {/*      <AssetList items={assets.filter((item) => item.address.endsWith("a"))} />*/}
            {/*    </TabsContent>*/}
            {/*    <TabsContent value="deployed" className="m-0">*/}
            {/*      <AssetList items={assets.filter((item) => item.address.endsWith("3"))} />*/}
            {/*    </TabsContent>*/}
            {/*  </Tabs>*/}
            {/*</div>*/}
            {/*<AssetList items={assets} />*/}
            <div className="flex flex-row">
              {/*<AssetList items={assets} />*/}
              <AssetDisplay asset={assets[0]} />\
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}
