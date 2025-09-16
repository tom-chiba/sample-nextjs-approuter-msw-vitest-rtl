import { expect, test } from "vitest";

test("responds with the user", async () => {
  const response = await fetch("https://api.example.com/user");

  await expect(response.json()).resolves.toEqual({
    id: 1,
    name: "John Doe",
  });
});
