import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness } from "lucide-react";

export function HeroBadge() {
  return (
    <Badge
      variant="outline"
      className="gap-2 rounded-full border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-widest text-foreground uppercase"
    >
      <BriefcaseBusiness className="size-3.5 text-brand" />
      50,000+ New Jobs This Month
    </Badge>
  );
}
