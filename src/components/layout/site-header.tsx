"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EVENTS_LINKS, NAV_LINKS, NAV_LINKS_TRAILING, SITE } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [eventsOpen, setEventsOpen] = useState(false);

  const isEventsActive = EVENTS_LINKS.some((link) => link.href === pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-saturate-150 supports-backdrop-filter:backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/icon.png" alt="" width={40} height={40} className="size-10" />
          <span className="font-heading text-2xl font-medium tracking-wide text-primary">
            Peel Manor House
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setEventsOpen((v) => !v)}
              aria-expanded={eventsOpen}
              className={cn(
                "flex items-center gap-1 rounded-sm px-4 py-2 text-sm font-medium transition-colors",
                isEventsActive ? "text-primary" : "text-foreground hover:text-primary"
              )}
            >
              Events
              <ChevronDown
                className={cn("size-3.5 transition-transform", eventsOpen && "rotate-180")}
              />
            </button>

            <AnimatePresence>
              {eventsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-full w-56 rounded-sm border border-border bg-card p-2 shadow-lg"
                >
                  {EVENTS_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setEventsOpen(false)}
                      className={cn(
                        "block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS_TRAILING.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-3.5" />
            {SITE.phone}
          </a>
          <Button render={<Link href="/contact" />}>Enquire Now</Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Peel Manor House</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose key={link.href} render={<Link href={link.href} />} className="rounded-sm px-2 py-2.5 text-base text-foreground hover:bg-muted">
                  {link.label}
                </SheetClose>
              ))}
              <p className="px-2 pt-3 pb-1 text-xs tracking-wide text-muted-foreground uppercase">
                Events
              </p>
              {EVENTS_LINKS.map((link) => (
                <SheetClose key={link.href} render={<Link href={link.href} />} className="rounded-sm px-2 py-2.5 text-base text-foreground hover:bg-muted">
                  {link.label}
                </SheetClose>
              ))}
              <div className="my-2 border-t border-border" />
              {NAV_LINKS_TRAILING.map((link) => (
                <SheetClose key={link.href} render={<Link href={link.href} />} className="rounded-sm px-2 py-2.5 text-base text-foreground hover:bg-muted">
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
              <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm text-foreground">
                <Phone className="size-4" />
                {SITE.phone}
              </a>
              <Button render={<Link href="/contact" />}>Enquire Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-sm px-4 py-2 text-sm font-medium transition-colors",
        active ? "text-primary" : "text-foreground hover:text-primary"
      )}
    >
      {children}
    </Link>
  );
}
