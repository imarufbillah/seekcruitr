import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JobCard } from "./JobCard";

const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 3,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 4,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 6,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
];

export function FeaturedJobs() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 px-4">

        {/* Section header */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Label with decorative squares */}
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-sm bg-brand" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              Smart Job Discovery
            </span>
            <span className="size-2 rounded-sm bg-brand" aria-hidden="true" />
          </div>

          <h2 className="font-heading max-w-lg text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            The roles you'd never find by searching
          </h2>
        </div>

        {/* Job grid */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job) => (
            <JobCard key={job.id} {...job} href={`/jobs/${job.id}`} />
          ))}
        </div>

        {/* CTA */}
        <Button
          asChild
          variant="outline"
          className="rounded-full border-border px-8 py-5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
        >
          <Link href="/jobs">View all job open</Link>
        </Button>
      </div>
    </section>
  );
}
