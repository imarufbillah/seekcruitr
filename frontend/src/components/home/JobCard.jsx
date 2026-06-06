import Link from "next/link";
import { MapPin, Laptop, Banknote, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function JobCard({ title, description, location, type, salary, href = "#" }) {
  return (
    <Card className="group flex flex-col justify-between gap-6 rounded-2xl border-border bg-card p-6 transition-colors hover:border-brand/40">
      <CardContent className="flex flex-col gap-4 p-0">
        {/* Title + description */}
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>

        {/* Meta badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
            <MapPin className="size-3 text-brand" />
            {location}
          </Badge>
          <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
            <Laptop className="size-3 text-brand" />
            {type}
          </Badge>
          <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
            <Banknote className="size-3 text-brand" />
            {salary}
          </Badge>
        </div>
      </CardContent>

      {/* Apply link */}
      <Button
        asChild
        variant="ghost"
        className="w-fit gap-1.5 p-0 text-sm font-medium text-foreground hover:bg-transparent hover:text-brand"
      >
        <Link href={href}>
          Apply Now
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Button>
    </Card>
  );
}
