import DataFetcher from "@/app/components/DataFetcher";
import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { server } from "../mocks/node";

describe("DataFetcher", () => {
  it("should show loading state initially", () => {
    render(<DataFetcher />);
    expect(screen.getByTestId("loading")).toHaveTextContent("Loading user...");
  });

  it("should fetch and display user data", async () => {
    render(<DataFetcher />);
    expect(await screen.findByTestId("user-data")).toBeInTheDocument();
    expect(screen.getByText("ID: 1")).toBeInTheDocument();
    expect(screen.getByText("Name: John Doe")).toBeInTheDocument();
  });

  it("should show error message on fetch failure", async () => {
    server.use(
      http.get("/api/user", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );
    render(<DataFetcher />);

    expect(await screen.findByTestId("error")).toHaveTextContent(
      "Error: Error: 500",
    );
  });
});
