import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "../../app/components/Button";
import { user } from "../vitest.setup";

describe("Button", () => {
  it("ボタンが正しくレンダリングされ、クリックイベントが発火すること", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>クリックしてね</Button>);

    const buttonElement = screen.getByText(/クリックしてね/i);
    expect(buttonElement).toBeInTheDocument();

    await user.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
