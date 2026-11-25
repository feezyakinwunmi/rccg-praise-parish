"use client";

import { useSyncExternalStore } from "react";

// Pages are prerendered, so the server's date can be stale. This returns null
// during prerender/hydration and the visitor's current date on the client.
let cached: Date | null = null;
const subscribe = () => () => {};
const getSnapshot = () => (cached ??= new Date());
const getServerSnapshot = () => null;

export function useNow(): Date | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
