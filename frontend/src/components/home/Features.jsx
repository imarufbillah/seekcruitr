import {
  Search,
  TrendingUp,
  Building2,
  Bookmark,
  Zap,
  FileText,
  Hexagon,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FEATURES = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: TrendingUp,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: Building2,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: Zap,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: Hexagon,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: ArrowUpRight,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      {/* Icon box */}
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
        <Icon className="size-5 text-brand" strokeWidth={1.5} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <p className="font-heading text-sm font-semibold text-foreground">{title}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function Features() {
  const topRow = FEATURES.slice(0, 4);
  const bottomRow = FEATURES.slice(4);

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 px-4">

        {/* Section header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-sm bg-brand" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              Features Job
            </span>
            <span className="size-2 rounded-sm bg-brand" aria-hidden="true" />
          </div>

          <h2 className="font-heading max-w-lg text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Feature grid — 4 cols, 2 rows */}
        <Card className="w-full border-border bg-card">
          <CardContent className="flex flex-col gap-0 p-0">
            {/* Top row */}
            <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
              {topRow.map((feature, i) => (
                <div
                  key={feature.title}
                  className="p-6 lg:border-r border-border last:border-r-0"
                >
                  <FeatureItem {...feature} />
                </div>
              ))}
            </div>

            {/* Horizontal divider */}
            <div className="h-px w-full bg-border" />

            {/* Bottom row */}
            <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
              {bottomRow.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 lg:border-r border-border last:border-r-0"
                >
                  <FeatureItem {...feature} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
