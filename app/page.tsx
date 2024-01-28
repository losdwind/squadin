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
import heroImage2 from "../public/home/heroPic2.png";
import heroImage3 from "../public/home/heroPic3.png";


export default function IndexPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const wheelGesturesPlugin = React.useRef(WheelGesturesPlugin());

  return (
    <div className="container flex-none">
      <PageHeader>
        {/*<Announcement />*/}
        <PageHeaderHeading>Unite, Create and Invest</PageHeaderHeading>
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
          <CarouselItem key={1}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="flex-row items-center justify-center ">
                    <div className="flex-col items-center justify-center space-y-4 p-12">
                      <div className="text-4xl font-semibold">
                        Discover your perfect squad of 3 or 4 members
                      </div>
                      <div className="text-xl">
                        Share your squad goals and let us help you find the
                        right people. Our algorithm matches you with peers who
                        have similar interests and needs.
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
          <CarouselItem key={2}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="flex-row items-center justify-center ">
                    <div className="flex-col items-center justify-center space-y-4 p-12">
                      <div className="text-4xl font-semibold">
                        Share memorable moments with your squad
                      </div>
                      <div className="text-xl">
                        Capture and showcase the exciting experiences you have
                        with your squad. Our community appreciates high-quality
                        content shared by dedicated members.
                      </div>
                    </div>
                    <Image
                      src={heroImage2}
                      className="rounded-md"
                      alt="Descriptive Alt Text"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={3}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="flex-row items-center justify-center ">
                    <div className="flex-col items-center justify-center space-y-4 p-12">
                      <div className="text-4xl font-semibold">
                        Get rewarded for your shared experiences
                      </div>
                      <div className="text-xl">
                        Every user can become a potential investor in your work.
                        Early investors enjoy greater profits. Start sharing and
                        monetizing your passion today.
                      </div>
                    </div>
                    <Image
                      src={heroImage3}
                      className="rounded-md"
                      alt="Descriptive Alt Text"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
