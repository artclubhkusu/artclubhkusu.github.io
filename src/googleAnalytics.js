export const GA_TRACKING_ID = 'G-RREQKJNSX6'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (title, url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_title: title,
    page_location: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}