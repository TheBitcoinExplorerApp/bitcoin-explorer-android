/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "src/__mocks__/navigation";
import Main from "../Main";

describe("Main", () => {
  it("renders correctly", () => {
    const queryClient = new QueryClient();

    const tree = renderer
      .create(
        <QueryClientProvider client={queryClient}>
          <Main navigation={() => {}} actualScreen="Home">
            Snapshot test!
          </Main>
        </QueryClientProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
