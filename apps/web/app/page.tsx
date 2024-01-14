"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { siteConfig } from "@ui/config/site";
import { cn } from "@ui/lib/utils";
import { Announcement } from "@ui/patterns/announcement";
import { Icons } from "@ui/patterns/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@ui/patterns/page-header";
import { buttonVariants } from "@ui/components/button";
import { Card, CardContent } from "@ui/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ui/components/carousel";

import heroImage1 from "../public/home/heroPic1.png";

export default function IndexPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const wheelGesturesPlugin = React.useRef(WheelGesturesPlugin());

  return (
    <div className="container flex-none">
      <PageHeader>
        {/*<Announcement />*/}
        <PageHeaderHeading>Unite and monetize</PageHeaderHeading>
        {/*<PageHeaderDescription>*/}
        {/*  A decentralized platform expertly designed for tight-knit squads.*/}
        {/*</PageHeaderDescription>*/}
        {/*<PageActions>*/}
        {/*  <Link href="/examples/explore" className={cn(buttonVariants())}>*/}
        {/*    Try now*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    target="_blank"*/}
        {/*    rel="noreferrer"*/}
        {/*    href={siteConfig.links.github}*/}
        {/*    className={cn(buttonVariants({ variant: "outline" }))}*/}
        {/*  >*/}
        {/*    <Icons.gitHub className="mr-2 h-4 w-4" />*/}
        {/*    GitHub*/}
        {/*  </Link>*/}
        {/*</PageActions>*/}
      </PageHeader>
      <Carousel
        plugins={[plugin.current, wheelGesturesPlugin.current]}
        className="mx-8 flex"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="flex-row items-center justify-center ">
                      <div className="flex-col items-center justify-center space-y-4 p-12">
                        <div className="text-4xl font-semibold">
                          Kindred Spirt Don’t Come Along Often.
                        </div>
                        <div className="text-xl">
                          Post your unique project as a open branch and AI helps
                          you to recruit no more than 5 peers. The algorithm
                          will only match peers with similar wellbeing status
                          and interest.
                        </div>
                      </div>
                      <Image
                        src={heroImage1}
                        className="rounded-md"
                        alt="Descriptive Alt Text"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/asset-dark.png"
          width={1280}
          height={727}
          alt="Asset"
          className="hidden dark:block"
        />
        <Image
          src="/examples/asset-light.png"
          width={1280}
          height={727}
          alt="Asset"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <AssetPage />
        </div>
      </section> */}
    </div>
  );
}
