import fetch from "isomorphic-unfetch";

export default async function fetchDate(): Promise<string> {
  const res = await fetch("/api/date");
  return await res.json().then(payload => payload.date);
}
