import { useEffect, useState } from "react";

export function CountUpNumber({
  end,
  suffix = "",
  duration = 2400,
  active,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      // Reset to 0 when not active, ready for next trigger
      setValue(0);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end, duration]);

  return (
    <>
      {value.toLocaleString("en-US")}
      {suffix}
    </>
  );
}
