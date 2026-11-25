import { services } from "../data/schedule";

const items = services.map((s) => ({ id: s.id, day: s.day, title: s.title, time: s.start }));

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-3 whitespace-nowrap px-6 text-[15px]">
          <span className="text-white/50">{item.day}</span>
          <span className="font-medium text-white">{item.title}</span>
          <span className="tabular-nums text-sun">{item.time}</span>
          <span aria-hidden="true" className="ml-6 h-1.5 w-1.5 rotate-45 bg-plum-soft/50" />
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <section aria-label="Weekly service times" className="overflow-hidden bg-navy py-5">
      <div className="marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
