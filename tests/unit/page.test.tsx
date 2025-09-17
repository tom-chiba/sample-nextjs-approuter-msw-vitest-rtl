import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Page from "../../app/page";

vi.mock("../../app/components/ServerDataFetcher", () => ({
  default: () => <div>Mocked ServerDataFetcher</div>,
}));

test("Page", async () => {
  render(await Page());
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
