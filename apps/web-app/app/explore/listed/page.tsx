import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/components/table";
import { ScrollArea } from "@ui/components/scroll-area";
import { squads } from "@/app/squads/data";
import Link from "next/link";

const squadsAugmented = squads.map((squad) => {
  return {
    ...squad,
    price: Math.random()*9, // This will be a random number between 0 and 1
    change: (Math.random()*2 - 1)/4, // This should be replaced with your logic for change
    market_cap: Math.random()*1000000000 // This should be replaced with your logic for market_cap
  };
});
export default function TableDemo() {
  return (
    <ScrollArea className="col-span-4 p-8 h-[1000px] pr-4">
        <Table>
          <TableCaption>Rankings</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Token</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Sector</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Change</TableHead>

              <TableHead className="text-right">Market Cap</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
            {squadsAugmented.map((squadAugmented) => (
              <TableRow key={squadAugmented.code} className="group text-left">
                <TableCell className="font-medium group-hover:text-blue-500">
                  <Link href={`./squading/${squadAugmented.id}`}>
                    {squadAugmented.code}
                  </Link>
                </TableCell>
                <TableCell className="max-w-xs">
                  <div className="flex flex-col">
                    <div className="text-md py-1 font-medium">{squadAugmented.name}</div>
                    <div className="line-clamp-3 text-xs">
                    {squadAugmented.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{squadAugmented.keywords[0]}</TableCell>
                <TableCell>{squadAugmented.price.toFixed(2)}</TableCell>
                <TableCell className={squadAugmented.change < 0 ? 'text-red-500' : 'text-green-500'} >{(squadAugmented.change * 100).toFixed(2)}%</TableCell>
                <TableCell>{formatMarketCap({value: squadAugmented.market_cap})}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
    </ScrollArea>

)
}

function formatMarketCap({value}: { value: number }) {
  if (value < 1e3) return value; // less than a thousand
  if (value >= 1e3 && value < 1e6) return (value / 1e3).toFixed(2) + 'K'; // thousands
  if (value >= 1e6 && value < 1e9) return (value / 1e6).toFixed(2) + 'M'; // millions
  if (value >= 1e9 && value < 1e12) return (value / 1e9).toFixed(2) + 'B'; // billions
  return (value / 1e12).toFixed(2) + 'T'; // trillions
}
