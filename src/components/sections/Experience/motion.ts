const itemRevealWidth = 0.16;

function clamp(value: number) {
  return Math.min(Math.max(value, 0), 1);
}

export function getTimelineItemRange(index: number, totalItems: number) {
  if (totalItems <= 1) {
    return [0, 0.2] as const;
  }

  const step = 1 / (totalItems - 1);
  const center = index * step;

  return [
    clamp(center - itemRevealWidth),
    clamp(center + itemRevealWidth),
  ] as const;
}
