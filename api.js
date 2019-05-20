import moment from "moment";

import * as Expo from "expo";

const { manifest } = Expo.Constants;
const api = manifest.packagerOpts.dev
  ? manifest.debuggerHost
      .split(":")
      .shift()
      .concat(":3000")
  : "api.example.com";

const url = `http://127.0.0.1:3000/events`;
console.log("API server is at: " + url);
export function getEvents() {
  return fetch(url)
    .then(response => response.json())
    .then(events => events.map(e => ({ ...e, date: new Date(e.date) })))
    .catch(error => {
      console.error(error);
    });
}

// export async function getEvents() {
//   try {
//     const events = await axios.get(url);
//     console.log(events);
//   } catch (error) {
//     console.error(error);
//   }
// }

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format("D MMM YYYY");
}

export function formatDateTime(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format("H A on D MMM YYYY");
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(
    moment(new Date(eventDate)).diff(new Date())
  );
  return {
    days: parseInt(duration.as("days")),
    hours: duration.get("hours"),
    minutes: duration.get("minutes"),
    seconds: duration.get("seconds")
  };
}
