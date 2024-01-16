"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Announcement } from "@/components/announcement";
import { Icons } from "@/components/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    </div>
  );
}
