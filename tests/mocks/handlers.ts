import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/user", () => {
    return HttpResponse.json({
      id: 1,
      name: "John Doe",
    });
  }),
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      id: 1,
      name: "John Doe",
    });
  }),
];
