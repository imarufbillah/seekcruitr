"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Search,
  ChevronDown,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Mock data ────────────────────────────────────────────────────── */
/* daysAgo: 0-2 → "new" (teal left border); closing: true → amber */
const ALL_JOBS = [
  {
    id: 1,
    company: "Figma",
    initials: "Fi",
    title: "Senior Product Designer",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Design",
    salary: "$130K – $160K",
    salaryMin: 130,
    salaryMax: 160,
    daysAgo: 1,
    closing: false,
  },
  {
    id: 2,
    company: "Vercel",
    initials: "Ve",
    title: "AI Platform Engineer",
    location: "Remote · Global",
    type: "Full-time",
    category: "Engineering",
    salary: "$150K – $185K",
    salaryMin: 150,
    salaryMax: 185,
    daysAgo: 0,
    closing: false,
  },
  {
    id: 3,
    company: "Linear",
    initials: "Li",
    title: "DevOps Engineer",
    location: "New York, NY",
    type: "Contract",
    category: "DevOps",
    salary: "$120K – $148K",
    salaryMin: 120,
    salaryMax: 148,
    daysAgo: 5,
    closing: true,
  },
  {
    id: 4,
    company: "Stripe",
    initials: "St",
    title: "Backend Engineer – Payments",
    location: "Dublin, Ireland",
    type: "Full-time",
    category: "Engineering",
    salary: "$140K – $175K",
    salaryMin: 140,
    salaryMax: 175,
    daysAgo: 7,
    closing: false,
  },
  {
    id: 5,
    company: "Notion",
    initials: "No",
    title: "Growth Marketing Manager",
    location: "Remote · US",
    type: "Full-time",
    category: "Marketing",
    salary: "$110K – $135K",
    salaryMin: 110,
    salaryMax: 135,
    daysAgo: 2,
    closing: false,
  },
  {
    id: 6,
    company: "Loom",
    initials: "Lo",
    title: "iOS Engineer",
    location: "Austin, TX",
    type: "Part-time",
    category: "Engineering",
    salary: "$125K – $155K",
    salaryMin: 125,
    salaryMax: 155,
    daysAgo: 12,
    closing: false,
  },
  {
    id: 7,
    company: "Shopify",
    initials: "Sh",
    title: "Data Scientist – Commerce",
    location: "Remote · Canada",
    type: "Full-time",
    category: "Data & Analytics",
    salary: "$135K – $165K",
    salaryMin: 135,
    salaryMax: 165,
    daysAgo: 1,
    closing: false,
  },
  {
    id: 8,
    company: "Atlassian",
    initials: "At",
    title: "Product Manager, Jira",
    location: "Sydney, Australia",
    type: "Full-time",
    category: "Product",
    salary: "$120K – $155K",
    salaryMin: 120,
    salaryMax: 155,
    daysAgo: 3,
    closing: true,
  },
  {
    id: 9,
    company: "GitHub",
    initials: "Gh",
    title: "Developer Relations Engineer",
    location: "Remote · Global",
    type: "Full-time",
    category: "Engineering",
    salary: "$115K – $145K",
    salaryMin: 115,
    salaryMax: 145,
    daysAgo: 9,
    closing: false,
  },
  {
    id: 10,
    company: "HubSpot",
    initials: "Hu",
    title: "Senior Sales Engineer",
    location: "Boston, MA",
    type: "Full-time",
    category: "Sales",
    salary: "$105K – $130K",
    salaryMin: 105,
    salaryMax: 130,
    daysAgo: 0,
    closing: false,
  },
  {
    id: 11,
    company: "Twilio",
    initials: "Tw",
    title: "Solutions Architect",
    location: "San Francisco, CA",
    type: "Contract",
    category: "Engineering",
    salary: "$145K – $175K",
    salaryMin: 145,
    salaryMax: 175,
    daysAgo: 6,
    closing: false,
  },
  {
    id: 12,
    company: "Intercom",
    initials: "In",
    title: "Customer Success Lead",
    location: "Dublin, Ireland",
    type: "Full-time",
    category: "Customer Success",
    salary: "$90K – $115K",
    salaryMin: 90,
    salaryMax: 115,
    daysAgo: 14,
    closing: true,
  },
];

const LOCATIONS = [
  "All Locations",
  "Remote",
  "San Francisco, CA",
  "New York, NY",
  "Austin, TX",
  "Dublin, Ireland",
];
const JOBS_PER_PAGE = 8;

/* ── Company logo placeholder ─────────────────────────────────────── */
function CompanyLogo({ initials }) {
  return (
    <div
      className="flex size-12 shrink-0 items-center justify-center rounded-md border border-border bg-popover"
      aria-hidden="true"
    >
      <span className="font-heading text-[14px] font-semibold leading-none text-primary">
        {initials}
      </span>
    </div>
  );
}

/* ── Badge pills ──────────────────────────────────────────────────── */
function TypeBadge({ type }) {
  const isContract = type === "Contract";
  const isPart = type === "Part-time";
  const isIntern = type === "Internship";
  const isAmber = isContract || isPart || isIntern;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1",
        "font-sans text-[12px] font-medium",
        isAmber ? "bg-chart-2/10 text-chart-2" : "bg-primary/10 text-primary",
      )}
    >
      {type}
    </span>
  );
}

function LocationBadge({ location }) {
  return (
    <span className="inline-flex items-center gap-1 font-sans text-[12px] text-muted-foreground">
      <MapPin className="size-3 shrink-0" aria-hidden="true" />
      {location}
    </span>
  );
}

/* ── Status label (new / closing soon) ───────────────────────────── */
function StatusPill({ daysAgo, closing }) {
  if (daysAgo <= 2) {
    return (
      <span className="inline-flex items-center rounded-full px-2 py-0.5 font-sans text-[11px] font-medium bg-primary/10 text-primary">
        New
      </span>
    );
  }
  if (closing) {
    return (
      <span className="inline-flex items-center rounded-full px-2 py-0.5 font-sans text-[11px] font-medium bg-chart-2/10 text-chart-2">
        Closing Soon
      </span>
    );
  }
  return (
    <span className="font-sans text-[12px] text-muted-foreground">
      {daysAgo}d ago
    </span>
  );
}

/* ── Save button ──────────────────────────────────────────────────── */
function SaveButton({ saved, onToggle, jobTitle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={saved ? `Unsave ${jobTitle}` : `Save ${jobTitle}`}
      aria-pressed={saved}
      className={cn(
        "flex size-8 items-center justify-center rounded-md border transition-colors duration-150",
        saved
          ? "border-primary bg-primary/10 text-primary"
          : "border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
    >
      {saved ? (
        <BookmarkCheck className="size-4" aria-hidden="true" />
      ) : (
        <Bookmark className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}

/* ── Single job card ──────────────────────────────────────────────── */
function JobCard({ job }) {
  const [saved, setSaved] = useState(false);
  const isNew = job.daysAgo <= 2;
  const isClosing = !isNew && job.closing;

  return (
    <article
      className={cn(
        "relative flex items-start gap-4 rounded-xl border bg-card p-5",
        "transition-all duration-200 ease-out",
        "hover:bg-popover hover:border-primary",
        "hover:shadow-[0_4px_24px_-4px_color-mix(in_oklch,var(--primary)_15%,transparent)]",
        /* Status left border */
        isNew && "border-l-2 border-l-primary border-border",
        isClosing && "border-l-2 border-l-chart-2 border-border",
        !isNew && !isClosing && "border-border",
      )}
      aria-label={`${job.title} at ${job.company}`}
    >
      {/* ── Logo ── */}
      <CompanyLogo initials={job.initials} />

      {/* ── Main content ── */}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex flex-col gap-1">
            <Link
              href={`/jobs/${job.id}`}
              className={cn(
                "font-heading text-[18px] font-semibold leading-snug text-foreground",
                "hover:text-primary transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
              )}
            >
              {job.title}
            </Link>
            <p className="font-sans text-[14px] text-muted-foreground">
              {job.company}
            </p>
          </div>

          {/* Salary (top-right on desktop) */}
          <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
            <span className="font-heading text-[16px] font-semibold text-primary whitespace-nowrap">
              {job.salary}
            </span>
            <StatusPill daysAgo={job.daysAgo} closing={job.closing} />
          </div>
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2">
          <LocationBadge location={job.location} />
          <span className="text-border" aria-hidden="true">
            ·
          </span>
          <TypeBadge type={job.type} />
          <span className="text-border" aria-hidden="true">
            ·
          </span>
          <span className="font-sans text-[12px] text-muted-foreground">
            {job.category}
          </span>
        </div>

        {/* Mobile salary row */}
        <div className="flex sm:hidden items-center justify-between">
          <span className="font-heading text-[15px] font-semibold text-primary">
            {job.salary}
          </span>
          <StatusPill daysAgo={job.daysAgo} closing={job.closing} />
        </div>
      </div>

      {/* ── Action buttons ── */}
      <div className="flex shrink-0 flex-col items-end gap-2 self-center">
        <SaveButton
          saved={saved}
          onToggle={() => setSaved((v) => !v)}
          jobTitle={job.title}
        />
        <Link
          href={`/jobs/${job.id}`}
          className={cn(
            "inline-flex h-8 items-center rounded-md px-4",
            "bg-primary text-primary-foreground",
            "font-sans text-[13px] font-medium",
            "transition-all duration-150 hover:bg-primary/90",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          Apply
        </Link>
      </div>
    </article>
  );
}

/* ── Search bar ───────────────────────────────────────────────────── */
function SearchBar({ keyword, location, onKeyword, onLocation }) {
  const [locOpen, setLocOpen] = useState(false);

  return (
    <div
      role="search"
      aria-label="Search jobs"
      className={cn(
        "flex h-12 w-full items-center gap-0 overflow-hidden",
        "rounded-xl border border-border bg-popover",
        "focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/30",
        "transition-all duration-200",
      )}
    >
      {/* Keyword input */}
      <div className="flex flex-1 items-center gap-2.5 px-4">
        <Search
          className="size-4 shrink-0 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Job title, keywords, or company"
          value={keyword}
          onChange={(e) => onKeyword(e.target.value)}
          aria-label="Job title, keywords, or company"
          className={cn(
            "h-full flex-1 bg-transparent",
            "font-sans text-[14px] text-foreground placeholder:text-muted-foreground",
            "outline-none border-none",
          )}
        />
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-border shrink-0" aria-hidden="true" />

      {/* Location dropdown */}
      <div className="relative shrink-0">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={locOpen}
          aria-label={`Location filter: ${location || "All Locations"}`}
          onClick={() => setLocOpen((v) => !v)}
          className={cn(
            "flex h-12 items-center gap-2 px-4",
            "font-sans text-[14px] text-foreground",
            "transition-colors duration-150 hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          <MapPin
            className="size-4 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
          <span className="hidden sm:inline max-w-30 truncate">
            {location || "All Locations"}
          </span>
          <ChevronDown
            className={cn(
              "size-3.5 text-muted-foreground transition-transform duration-200",
              locOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>

        {locOpen && (
          <ul
            role="listbox"
            aria-label="Location options"
            className={cn(
              "absolute right-0 top-full z-20 mt-1 w-52 rounded-xl border border-border bg-popover py-1",
              "shadow-[0_8px_24px_-4px_color-mix(in_oklch,var(--background)_60%,transparent)]",
            )}
          >
            {LOCATIONS.map((loc) => (
              <li
                key={loc}
                role="option"
                aria-selected={
                  location === loc || (loc === "All Locations" && !location)
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    onLocation(loc === "All Locations" ? "" : loc);
                    setLocOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left font-sans text-[14px] transition-colors duration-100",
                    "hover:bg-accent hover:text-foreground",
                    location === loc || (loc === "All Locations" && !location)
                      ? "text-primary font-medium"
                      : "text-muted-foreground",
                  )}
                >
                  {loc}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Search button */}
      <button
        type="submit"
        aria-label="Search jobs"
        className={cn(
          "h-full shrink-0 rounded-r-xl px-5",
          "bg-primary text-primary-foreground",
          "font-sans text-[14px] font-medium",
          "transition-colors duration-150 hover:bg-primary/90",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        Search
      </button>
    </div>
  );
}

/* ── Pagination ───────────────────────────────────────────────────── */
function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Job listings pagination"
      className="flex items-center justify-center gap-1 pt-2"
    >
      {/* Previous */}
      <button
        type="button"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Previous page"
        className={cn(
          "font-sans text-[14px] font-medium px-3 py-1.5 rounded-md transition-colors duration-150",
          current === 1
            ? "text-muted-foreground/40 cursor-not-allowed"
            : "text-primary hover:bg-primary/10",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        Previous
      </button>

      {/* Mid dot separator */}
      <span
        className="text-muted-foreground/40 select-none px-1"
        aria-hidden="true"
      >
        ·
      </span>

      {/* Page numbers */}
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          aria-label={`Page ${p}`}
          aria-current={p === current ? "page" : undefined}
          className={cn(
            "size-8 rounded-md font-sans text-[14px] font-medium transition-colors duration-150",
            p === current
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          {p}
        </button>
      ))}

      <span
        className="text-muted-foreground/40 select-none px-1"
        aria-hidden="true"
      >
        ·
      </span>

      {/* Next */}
      <button
        type="button"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="Next page"
        className={cn(
          "font-sans text-[14px] font-medium px-3 py-1.5 rounded-md transition-colors duration-150",
          current === total
            ? "text-muted-foreground/40 cursor-not-allowed"
            : "text-primary hover:bg-primary/10",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        Next
      </button>
    </nav>
  );
}

/* ── Main listings panel ──────────────────────────────────────────── */
export default function JobListings({ filters }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);

  /* Filter jobs against sidebar filters + search bar */
  const filtered = ALL_JOBS.filter((job) => {
    const kw = keyword.trim().toLowerCase();
    if (
      kw &&
      !job.title.toLowerCase().includes(kw) &&
      !job.company.toLowerCase().includes(kw)
    )
      return false;
    if (
      location &&
      !job.location.toLowerCase().includes(location.toLowerCase())
    )
      return false;
    if (filters.jobTypes.length && !filters.jobTypes.includes(job.type))
      return false;
    if (filters.location) {
      const fl = filters.location.trim().toLowerCase();
      if (!job.location.toLowerCase().includes(fl)) return false;
    }
    if (filters.salary) {
      if (
        job.salaryMax < filters.salary[0] ||
        job.salaryMin > filters.salary[1]
      )
        return false;
    }
    if (filters.category && job.category !== filters.category) return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / JOBS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * JOBS_PER_PAGE,
    safePage * JOBS_PER_PAGE,
  );

  function handleSearch() {
    setPage(1);
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-5">
      {/* ── Search bar ── */}
      <SearchBar
        keyword={keyword}
        location={location}
        onKeyword={(v) => {
          setKeyword(v);
          setPage(1);
        }}
        onLocation={(v) => {
          setLocation(v);
          setPage(1);
        }}
        onSearch={handleSearch}
      />

      {/* ── Results count ── */}
      <div className="flex items-center justify-between">
        <p className="font-sans text-[14px] text-muted-foreground">
          <span className="font-medium text-foreground">{filtered.length}</span>{" "}
          job
          {filtered.length !== 1 ? "s" : ""} found
        </p>
        <span className="font-sans text-[13px] text-muted-foreground">
          Page {safePage} of {totalPages}
        </span>
      </div>

      {/* ── Job list ── */}
      {paginated.length > 0 ? (
        <ul
          className="flex flex-col gap-3"
          role="list"
          aria-label="Job listings"
        >
          {paginated.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
          <p className="font-heading text-[18px] font-semibold text-foreground">
            No jobs found
          </p>
          <p className="mt-2 font-sans text-[14px] text-muted-foreground max-w-xs">
            Try adjusting your search or filters to find what you&apos;re
            looking for.
          </p>
        </div>
      )}

      {/* ── Pagination ── */}
      <Pagination current={safePage} total={totalPages} onChange={setPage} />
    </div>
  );
}
