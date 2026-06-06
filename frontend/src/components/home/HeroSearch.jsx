"use client";

import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const TRENDING = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export function HeroSearch() {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-3">
      {/* Search bar */}
      <div className="flex w-full items-center gap-2 rounded-xl border border-border bg-card p-1.5 shadow-xl shadow-black/30">
        <div className="flex flex-1 items-center gap-2 px-3">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Job title, skill or company"
            aria-label="Job title, skill or company"
            className="border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0 placeholder:text-muted-foreground"
          />
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex flex-1 items-center gap-2 px-3">
          <MapPin className="size-4 shrink-0 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Location or Remote"
            aria-label="Location or Remote"
            className="border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0 placeholder:text-muted-foreground"
          />
        </div>

        <Button
          aria-label="Search jobs"
          size="icon"
          className="size-9 shrink-0 rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 shadow-none"
        >
          <Search className="size-4" />
        </Button>
      </div>

      {/* Trending tags */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs text-muted-foreground">Trending Position</span>
        {TRENDING.map((tag) => (
          <button
            key={tag}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
