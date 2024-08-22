/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "src/__mocks__/navigation";
import Home from "../Home";

describe("Home", () => {
  it("renders correctly", () => {
    const queryClient = new QueryClient();

    const tree = renderer
      .create(
        <QueryClientProvider client={queryClient}>
          <Home navigation={() => {}} />
        </QueryClientProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
