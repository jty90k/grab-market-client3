export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://k2-grab-market.herokuapp.com"
    : "http://localhost:8080";
