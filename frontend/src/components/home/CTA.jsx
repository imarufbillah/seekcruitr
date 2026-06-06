import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-32">
      {/* Dome / grid background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/cta-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-80"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="max-w-md text-base text-muted-foreground">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            className="rounded-xl bg-foreground px-6 py-5 text-sm font-semibold text-background hover:bg-foreground/90 shadow-none"
          >
            <Link href="/sign-up">Create a free account</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-xl border-border bg-card/60 px-6 py-5 text-sm font-semibold text-foreground backdrop-blur-sm hover:border-brand hover:text-brand shadow-none"
          >
            <Link href="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
