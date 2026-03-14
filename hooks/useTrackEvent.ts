"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export function useTrackEvent() {
  const router = useRouter();

  const trackEvent = useCallback((eventName: string, value: string) => {
    try {
      sendGAEvent({ event: eventName, value: value });
      // Also manually push to dataLayer to guarantee it's available for GTM/GA to pick up
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({ event: eventName, value: value });
      }
    } catch (e) {
      console.warn("Failed to send GA event", e);
    }
  }, []);

  const trackAndNavigate = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      url: string,
      eventName: string,
      value: string
    ) => {
      e.preventDefault();
      trackEvent(eventName, value);

      // small delay to allow GA to fire before un-mounting
      setTimeout(() => {
        if (url.startsWith("mailto:") || url.startsWith("http")) {
          window.location.href = url;
        } else {
          router.push(url);
        }
      }, 150);
    },
    [router, trackEvent]
  );

  return { trackEvent, trackAndNavigate };
}
