export default function getCurrentDateTime(): string {
  return new Date(global.Date.now()).toISOString().replace(/T/, " ").replace(/\..+/, "");
}
