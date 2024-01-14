import Image from "next/image";
import { DotsVerticalIcon, PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@ui/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@ui/components/avatar";
import { Button } from "@ui/components/button";

import { Squad } from "../../squads/data";
import { categories } from "../data/categories";

interface SquadInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  squad: Squad;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function SuqadInfo({
  squad,
  width,
  height,
  className,
  ...props
}: SquadInfoProps) {
  return (
    <div className={cn("group space-y-4 ", className)} {...props}>
      <div className="overflow-hidden rounded-xl bg-card text-card-foreground shadow">
        <Image
          src={squad.cover}
          alt={squad.name}
          width={320}
          height={180}
          className={cn(
            "aspect-video h-[180] w-[320] rounded-t-md object-cover transition-all hover:scale-105"
          )}
        />
      </div>
      <div className="flex grow flex-row items-start space-x-1">
        <div className="flex flex-col gap-3">
          <h2 className="text-md font-semibold tracking-tight first:mt-0 line-clamp-3">
            {squad.description}
          </h2>
          <div className="flex flex-row items-end">
            <h3 className="mr-auto font-medium leading-none">{squad.name}</h3>

            <div className="flex flex-row -space-x-2">
              {squad.members.map((member) => {
                return (
                  <Avatar key={member} className="h-6 w-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>{member.slice(1, 4)}</AvatarFallback>
                  </Avatar>
                );
              })}
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="opacity-0 group-hover:opacity-100"
        >
          <DotsVerticalIcon />
        </Button>
      </div>
    </div>
  );
}
