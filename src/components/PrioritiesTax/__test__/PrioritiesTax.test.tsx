/* eslint-disable import/no-extraneous-dependencies */
import { I18n } from "i18n-js";
import renderer from "react-test-renderer";
import { initialStateFees } from "src/__mocks__/initialStates";
import PrioritiesTax from "../PrioritiesTax";
import "expo-localization"; // Importa para garantir que o mock está sendo usado

// Mocking the i18n function
jest.mock("i18n-js", () => {
  const actualI18nJs = jest.requireActual("i18n-js");

  return {
    __esModule: true, // Ensures that the default export works as expected
    default: jest.fn(() => ({
      t: jest.fn((key) => key),
      currentLocale: "en",
      locale: "en",
      defaultLocale: "en",
      enableFallback: true,
    })),
    I18n: actualI18nJs.I18n, // Export the actual I18n constructor
  };
});

// _i18nJs.I18n is not a constructor - solving this error

const localization = {
  t: (value: string) => value,
  currentLocale: "en",
};

describe("PrioritiesTax", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PrioritiesTax
          fees={initialStateFees}
          localization={localization as unknown as I18n}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
