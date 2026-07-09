const HUMANITIX_API_BASE = "https://api.humanitix.com/v1";

type HumanitixDateRange = {
  startDate: string;
  endDate: string;
  disabled?: boolean;
  deleted?: boolean;
};

type HumanitixEvent = {
  name: string;
  url: string;
  timezone?: string;
  published?: boolean;
  public?: boolean;
  markedAsSoldOut?: boolean;
  suspendSales?: boolean;
  dates?: HumanitixDateRange[];
};

type HumanitixEventsResponse = {
  events?: HumanitixEvent[];
};

export type NextHighTeaEvent = {
  name: string;
  url: string;
  startDate: string;
  timezone: string;
};

/**
 * Server-only: reads HUMANITIX_API_KEY from process.env, never bundled
 * client-side since this file is only imported by server components/routes.
 */
export async function getNextHighTeaEvent(): Promise<NextHighTeaEvent | null> {
  const apiKey = process.env.HUMANITIX_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `${HUMANITIX_API_BASE}/events?page=1&pageSize=100&inFutureOnly=true`,
      {
        headers: { "x-api-key": apiKey },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;

    const data: HumanitixEventsResponse = await res.json();
    const now = Date.now();

    const candidates = (data.events ?? [])
      .filter(
        (event) =>
          event.published &&
          event.public &&
          !event.markedAsSoldOut &&
          !event.suspendSales &&
          event.name?.toLowerCase().includes("high tea")
      )
      // ponytail: single page (max 100 upcoming events), add pagination if event count grows
      .flatMap((event) =>
        (event.dates ?? [])
          .filter(
            (date) =>
              !date.disabled &&
              !date.deleted &&
              new Date(date.startDate).getTime() > now
          )
          .map((date) => ({
            name: event.name,
            url: event.url,
            startDate: date.startDate,
            timezone: event.timezone ?? "Australia/Perth",
          }))
      )
      .sort(
        (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );

    return candidates[0] ?? null;
  } catch {
    return null;
  }
}
