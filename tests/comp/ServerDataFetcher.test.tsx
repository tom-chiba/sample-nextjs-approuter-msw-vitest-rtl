import ServerDataFetcher from "@/app/components/ServerDataFetcher";
import { render, screen } from "@testing-library/react";

describe("ServerDataFetcher", () => {
  it("should fetch and display data on the server", async () => {
    render(await ServerDataFetcher());

    expect(await screen.findByText("delectus aut autem")).toBeInTheDocument();
  });
});
