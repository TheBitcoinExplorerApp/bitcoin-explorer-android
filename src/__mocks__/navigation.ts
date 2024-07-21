const mockNavigation = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNavigation = jest.requireActual("@react-navigation/native");
  return {
    ...actualNavigation,
    useNavigation: () => ({
      navigate: mockNavigation,
    }),
  };
});
