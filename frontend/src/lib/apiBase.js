/**
 * Backend origin without trailing slash.
 * - Vercel (recommended): omit REACT_APP_BACKEND_URL → same-origin `/api/...`.
 * - Local: leave unset and use craco devServer proxy, or set e.g. http://127.0.0.1:8000
 */
export function getBackendBase() {
  const raw = process.env.REACT_APP_BACKEND_URL;
  if (raw == null || String(raw).trim() === "") {
    return "";
  }
  return String(raw).replace(/\/$/, "");
}

/** Full API prefix, e.g. `/api` or `https://host.com/api` */
export const API = `${getBackendBase()}/api`;
