import { Sidebar } from "@/app/web/explore/components/sidebar";
import { stages } from "./data/stages";
import { spaces } from "./data/spaces";
export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-tbg-background">
      <div className="grid lg:grid-cols-5">
        <Sidebar stages={stages} spaces={spaces} className="hidden lg:block" />
        {children}
      </div>
    </div>
  );
}
