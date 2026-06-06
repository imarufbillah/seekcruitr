import Image from "next/image";
import { HeroBadge } from "./HeroBadge";
import { HeroSearch } from "./HeroSearch";
import { HeroStats } from "./HeroStats";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ── Globe as full-section background ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/globe.png"
          alt=""
          fill
          unoptimized
          className="object-cover object-bottom"
          priority
          aria-hidden="true"
        />
        {/* fade the very top so navbar blends cleanly */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background to-transparent" />
        {/* fade bottom so stats cards sit on solid bg */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-background to-transparent" />
      </div>

      {/* ── Foreground content ── */}
      <div className="relative z-10 flex flex-col items-center px-4">

        {/* Hero text block — sits in the upper/star portion of the globe image */}
        <div className="flex flex-col items-center gap-6 pt-36 text-center">
          <HeroBadge />

          <h1 className="font-heading max-w-2xl text-5xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-[4rem]">
            Find Your Dream Job Today
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>

          <HeroSearch />
        </div>

        {/* "Assisting over" label — sits roughly mid-section, above the globe horizon */}
        <div className="mt-32 text-center">
          <p className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
            Assisting over{" "}
            <span className="text-brand">15,000 job seekers</span>
            <br />
            find their dream positions.
          </p>
        </div>

        {/* Stats cards — anchored to bottom, overlapping the fade-out */}
        <div className="mt-auto w-full max-w-5xl pt-64 pb-12">
          <HeroStats />
        </div>
      </div>
    </section>
  );
}
