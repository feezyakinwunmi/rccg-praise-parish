// Parish events. Whether an event shows as upcoming or past is worked out
// from its date, so nothing needs moving once the day has gone.

export interface ChurchEvent {
  id: string;
  title: string;
  /** ISO date, e.g. "2026-05-16" */
  date: string;
  time: string;
  location: string;
  summary: string;
  details: string;
  image: string;
}

export const events: ChurchEvent[] = [
  {
    id: "women-of-grace-2026",
    title: "Lagos Province 132 Women of Grace Conference",
    date: "2026-05-16",
    time: "8:00 am to 4:00 pm",
    location: "The Praise Parish, Ora Estate, Epe",
    summary:
      "A day conference for women, themed Soaring Higher in Christ, with worship, teaching and prayer.",
    details:
      "Ministers from across Lagos Province 132 will speak, with music ministration, breakout sessions and time for prayer. Registration is free, but please register so we can plan seating and refreshments.",
    image: "/sh.jpeg",
  },
  {
    id: "pastors-appreciation-2026",
    title: "Pastor's appreciation Sunday",
    date: "2026-05-31",
    time: "9:00 am to 1:00 pm",
    location: "The Praise Parish, Ora Estate, Epe",
    summary:
      "A Sunday set aside to thank Pastor Sina Alabi (P.S) for his years of service to the parish.",
    details:
      "The service will include presentations, testimonies and musical tributes, followed by a reception. Come and say thank you to our pastor.",
    image: "/ppp.jpg",
  },
  {
    id: "epe-praise-experience-2026",
    title: "Epe Praise Experience 1.0",
    date: "2026-04-19",
    time: "3:00 pm",
    location: "The Praise Parish, Ora Estate, Majoda, Epe",
    summary:
      "An evening of praise hosted by Pastor Sina Alabi, with guest minister Pastor Nathaniel Bassey.",
    details:
      "RCCG Lagos Province 132 hosted Pastor Nathaniel Bassey and other gospel music ministers for an evening of worship on the parish grounds. Photos from the night are in the gallery.",
    image: "/epe1.jpg",
  },
];

export function formatEventDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function eventDay(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return {
    day: d.toLocaleDateString("en-GB", { day: "numeric" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }),
  };
}

/** Splits events into upcoming (soonest first) and past (latest first). */
export function splitEvents(now: Date) {
  const today = now.toISOString().slice(0, 10);
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));
  return { upcoming, past };
}
