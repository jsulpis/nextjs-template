import fetch from "isomorphic-unfetch";

const ROOT_URL = process.env.ROOT_URL;
const API_URL = "/api";

/**
 * Helper function to make API calls and testing pages easier
 * @param name: relative url of the API to call (will be appended to /api)
 */
export default async function apiGet<T>(name: string): Promise<T> {
  const res = await fetch(ROOT_URL + API_URL + name);
  return await res.json();
}
