import { Building2, BarChart2, SearchCheck, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const STATS = [
  { icon: Building2,   value: "50K", label: "Active Jobs" },
  { icon: BarChart2,   value: "12K", label: "Companies" },
  { icon: SearchCheck, value: "2M",  label: "Job Seekers" },
  { icon: Star,        value: "97%", label: "Satisfaction Rate" },
];

export function HeroStats() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
      {STATS.map(({ icon: Icon, value, label }) => (
        <Card key={label} className="border-border bg-card">
          <CardContent className="flex flex-col gap-4 p-5">
            <Icon className="size-5 text-muted-foreground" />
            <div>
              <p className="font-heading text-4xl font-bold tracking-tight text-foreground">
                {value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
