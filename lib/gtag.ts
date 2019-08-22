export const GA_TRACKING_ID = "UA-124217907-4";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  // @ts-ignore
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

export interface Event {
  action: string;
  category: string;
  label?: string;
  value?: string;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const triggerAnalyticsEvent = (e: Event) => {
  // @ts-ignore
  window.gtag("event", e.action, {
    event_category: e.category,
    event_label: e.label,
    value: e.value
  });
};
