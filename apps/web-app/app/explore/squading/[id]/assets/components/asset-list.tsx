import { ComponentProps } from "react";
import {formatDistanceToNow} from "date-fns/formatDistanceToNow";
import { enUS } from 'date-fns/locale'; // Import the locale package

import { cn } from "@ui/lib/utils";
import { Badge } from "@ui/components/badge";
import { ScrollArea } from "@ui/components/scroll-area";
import { Separator } from "@ui/components/separator";
import { Asset } from "../../assets/data";
import { useAsset } from "../../assets/use-asset";
import { AddressDisplay } from "@ui/patterns/address-display";

interface AssetListProps {
  items: Asset[];
}

export function AssetList({ items }: AssetListProps) {
  const [asset, setAsset] = useAsset();

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item) => (
          <button
            key={item.transaction_id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              asset.selected === item.transaction_id && "bg-muted"
            )}
            onClick={() =>
              setAsset({
                ...asset,
                selected: item.transaction_id,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <AddressDisplay address={item.address} />
                  {!item.status && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    asset.selected === item.transaction_id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), { locale: enUS })} {/* Call the function correctly */}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            {item.labels.length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null}
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
