import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "./mocks/node.js";

export const user = userEvent.setup();

afterAll(() => server.close());
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
