jest.mock("expo-localization", () => ({
  getLocales: jest.fn(() => [
    { country: "pt", languageTag: "pt-BR", languageCode: "pt", isRTL: false },
  ]),
}));
