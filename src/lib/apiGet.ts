import fetch from "isomorphic-unfetch";

/**
 * Helper function to make API calls and testing pages easier
 * @param name: relative url of the API to call (will be appended to /api)
 */
export default async function apiGet<T>(name: string): Promise<T> {
  const ROOT_URL = window.location.origin;
  const API_URL = "/api";

  const res = await fetch(ROOT_URL + API_URL + name);
  return res.json();
}
