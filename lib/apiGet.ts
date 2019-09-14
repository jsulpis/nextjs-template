import fetch from "isomorphic-unfetch";

/**
 * Helper function to make API calls and testing pages easier
 * @param name: relative url of the API to call (will be appended to /api)
 */
export default async function apiGet<T>(name: string): Promise<T> {
  const res = await fetch("/api" + name);
  return await res.json();
}
