import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Job discovery", href: "/jobs" },
      { label: "Worker AI", href: "/ai" },
      { label: "Companies", href: "/company" },
      { label: "Salary data", href: "/salary" },
    ],
  },
  {
    heading: "Navigations",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Career library", href: "/library" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Brand Guideline", href: "/brand" },
      { label: "Newsroom", href: "/news" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-background px-4 pb-8 pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <Link href="/" aria-label="Seekcruitr home">
              <Image
                src="/logo.png"
                alt="hireloop"
                width={110}
                height={28}
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="max-w-[180px] text-sm leading-relaxed text-muted-foreground">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-4">
              <p className="font-sans text-sm font-semibold text-brand">{heading}</p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaFacebook className="size-5" />
            </Link>
            <Link
              href="https://pinterest.com"
              aria-label="Pinterest"
              className="flex size-7 items-center justify-center rounded-full bg-brand text-brand-foreground transition-opacity hover:opacity-80"
            >
              <FaPinterestP className="size-3.5" />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaLinkedinIn className="size-5" />
            </Link>
          </div>

          {/* Legal */}
          <p className="text-xs text-muted-foreground">
            Copyright 2024 — Programming Hero &nbsp;·&nbsp;{" "}
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms &amp; Policy
            </Link>
            {" "}–{" "}
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Guideline
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
