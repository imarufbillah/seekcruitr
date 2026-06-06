"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Crown, BarChart2, Zap, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/* ─── Data ─────────────────────────────────────────── */
const PLANS = [
  {
    id: "starter",
    icon: Crown,
    name: "Starter",
    monthly: 0,
    yearly: 0,
    tagline: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    featured: false,
  },
  {
    id: "growth",
    icon: BarChart2,
    name: "Growth",
    monthly: 17,
    yearly: 13,
    tagline: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    featured: true,
  },
  {
    id: "premium",
    icon: Zap,
    name: "Premium",
    monthly: 99,
    yearly: 79,
    tagline: "Start building your insights hub:",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    featured: false,
  },
];

/* ─── Plan card ─────────────────────────────────────── */
function PlanCard({ plan, yearly }) {
  const price = yearly ? plan.yearly : plan.monthly;
  const Icon = plan.icon;

  return (
    <Card
      className={cn(
        "relative flex flex-col justify-between rounded-2xl border p-6 transition-shadow",
        plan.featured
          ? "border-border bg-secondary shadow-xl shadow-black/40 scale-[1.02]"
          : "border-border bg-card",
      )}
    >
      <CardContent className="flex flex-col gap-6 p-0">
        {/* Plan header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
              <Icon className="size-4 text-brand" strokeWidth={1.5} />
            </div>
            <span className="font-heading text-lg font-semibold text-foreground">
              {plan.name}
            </span>
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="font-heading text-4xl font-bold text-foreground">
              ${price}
            </span>
            <span className="text-xs text-muted-foreground">/month</span>
          </div>
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-foreground">{plan.tagline}</p>
          <ul className="flex flex-col gap-2.5">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Plus className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" strokeWidth={2} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      {/* CTA */}
      <Button
        asChild
        variant={plan.featured ? "default" : "secondary"}
        className={cn(
          "mt-8 flex w-full items-center justify-between rounded-xl px-5 py-5 text-sm font-semibold",
          plan.featured
            ? "bg-foreground text-background hover:bg-foreground/90"
            : "bg-muted text-foreground hover:bg-muted/80",
        )}
      >
        <Link href="/sign-up">
          Choose This Plan
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </Card>
  );
}

/* ─── Section ───────────────────────────────────────── */
export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 px-4">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-sm bg-brand" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              Pricing
            </span>
            <span className="size-2 rounded-sm bg-brand" aria-hidden="true" />
          </div>

          <h2 className="font-heading max-w-lg text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
          <button
            onClick={() => setYearly(false)}
            className={cn(
              "rounded-full px-5 py-1.5 text-sm font-medium transition-colors",
              !yearly
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-1.5 text-sm font-medium transition-colors",
              yearly
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Yearly
            <Badge className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-bold text-brand-foreground">
              25%
            </Badge>
          </button>
        </div>

        {/* Plan cards */}
        <div className="grid w-full grid-cols-1 items-center gap-4 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} yearly={yearly} />
          ))}
        </div>

      </div>
    </section>
  );
}
