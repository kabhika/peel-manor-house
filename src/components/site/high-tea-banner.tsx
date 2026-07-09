import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getNextHighTeaEvent } from "@/lib/humanitix";

export async function HighTeaBanner() {
  const event = await getNextHighTeaEvent();

  return (
    <section className="border-y border-border bg-muted py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
        {event ? (
          <>
            <p className="font-heading text-lg font-medium text-foreground sm:text-xl">
              Next High Tea: {formatEventDateTime(event.startDate, event.timezone)}
            </p>
            <Button
              size="lg"
              render={
                <a href={event.url} target="_blank" rel="noopener noreferrer" />
              }
            >
              Book Your Seat
            </Button>
          </>
        ) : (
          <>
            <p className="font-heading text-lg font-medium text-foreground sm:text-xl">
              Join us for our 2016 Gold Plate Award-winning High Tea.
            </p>
            <Button size="lg" render={<Link href="/high-tea" />}>
              Enquire About High Tea
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

function formatEventDateTime(iso: string, timeZone: string) {
  const date = new Date(iso);
  const formattedDate = date.toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone,
  });
  const formattedTime = date.toLocaleTimeString("en-AU", {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  });
  return `${formattedDate} at ${formattedTime}`;
}
