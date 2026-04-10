const DEV_API_URL = "http://localhost:4000";
const PROD_API_URL = "https://your-backend-domain.com";

export const serverUrl = (
  process.env.REACT_APP_API_BASE_URL ||
  (process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL)
).replace(/\/+$/, "");
