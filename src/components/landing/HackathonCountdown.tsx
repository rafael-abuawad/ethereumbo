import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/** Hackathon kickoff — adjust here (ISO 8601). America/La_Paz is UTC−4 year-round. */
export const DEFAULT_HACKATHON_TARGET_ISO = "2026-09-11T09:00:00-04:00";

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function computeParts(targetMs: number): TimeParts | "ended" {
  const now = Date.now();
  if (now >= targetMs) return "ended";
  let remaining = targetMs - now;
  const days = Math.floor(remaining / 86400000);
  remaining -= days * 86400000;
  const hours = Math.floor(remaining / 3600000);
  remaining -= hours * 3600000;
  const minutes = Math.floor(remaining / 60000);
  remaining -= minutes * 60000;
  const seconds = Math.floor(remaining / 1000);
  return { days, hours, minutes, seconds };
}

export type HackathonCountdownProps = {
  targetIso?: string;
};

export function HackathonCountdown({
  targetIso = DEFAULT_HACKATHON_TARGET_ISO,
}: HackathonCountdownProps) {
  const targetMs = React.useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [parts, setParts] = React.useState<TimeParts | "ended" | null>(null);

  React.useEffect(() => {
    if (Number.isNaN(targetMs)) {
      setParts("ended");
      return;
    }
    const tick = () => setParts(computeParts(targetMs));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  const units: { label: string; value: number | null }[] =
    parts === null
      ? [
          { label: "Días", value: null },
          { label: "Horas", value: null },
          { label: "Minutos", value: null },
          { label: "Segundos", value: null },
        ]
      : parts === "ended"
        ? []
        : [
            { label: "Días", value: parts.days },
            { label: "Horas", value: parts.hours },
            { label: "Minutos", value: parts.minutes },
            { label: "Segundos", value: parts.seconds },
          ];

  const showEnded = parts === "ended";

  return (
    <section
      className="relative w-full border-y border-border/80 bg-muted/40 py-20 md:py-24"
      aria-labelledby="hackathon-countdown-heading"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 lg:px-12">
        <div className="text-center md:text-left">
          <h2
            id="hackathon-countdown-heading"
            className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Cuenta regresiva al buildathon
          </h2>
          <p className="mt-2 max-w-2xl text-pretty text-muted-foreground md:mx-0 mx-auto">
            Cochabamba · 11 de septiembre {new Date(targetIso).getFullYear()}
          </p>
        </div>

        {showEnded ? (
          <div className="rounded-xl border border-border bg-card px-6 py-10 text-center">
            <p className="font-display text-xl font-semibold text-foreground md:text-2xl">
              El evento ya comenzó
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Revisa la agenda y detalles en Road to Buildathon.
            </p>
            <a
              href="/road-to-buildathon/"
              className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Ir a Road to Buildathon
            </a>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
            aria-live="polite"
            aria-atomic="true"
          >
            {units.map(({ label, value }) => (
              <Card key={label} className="border-border/80 py-4 shadow-none">
                <CardContent className="flex flex-col items-center gap-2 px-4 text-center">
                  <span
                    className={cn(
                      "font-display text-4xl font-bold tracking-tight text-foreground tabular-nums md:text-5xl lg:text-6xl",
                      value === null && "animate-pulse text-muted-foreground",
                    )}
                  >
                    {value === null ? "—" : value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
