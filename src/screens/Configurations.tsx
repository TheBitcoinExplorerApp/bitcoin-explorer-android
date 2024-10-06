/* eslint-disable import/no-extraneous-dependencies */
import { reportIssuesURL, sourceCodeURL } from "src/env/apiLinks";
import {
  dropdownCurrencyOptions,
  dropDownLanguageOptions,
} from "src/utils/dropDownOptions";
import useAppStore from "src/stores/App/useAppStore";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import ButtonsNavigation from "src/components/ButtonsNavigation/ButtonsNavigation";
import CodeIcon from "../assets/code.svg";
import BugIcon from "../assets/bug.svg";

type ConfigurationsProps = {
  navigation: unknown;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22.5,
    backgroundColor: "#101429",
    justifyContent: "space-between",
  },
  contentContainer: {
    gap: 18,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    color: "#DF7800",
    fontWeight: "bold",
  },
  secondaryTitle: {
    fontSize: 20,
    color: "#FFF",
  },
  settingsContainer: {
    gap: 24,
    backgroundColor: "#1d2133",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 7,
  },
  languageOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languageDropdown: {
    flex: 1,
    maxWidth: 130,
  },
  selectedLanguage: {
    color: "#C6C6C6",
    fontSize: 16,
    textAlign: "right",
    marginRight: 4,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
  },
  supportContainer: {
    gap: 24,
    backgroundColor: "#1d2133",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 7,
  },
  supportItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  supportItemContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

const openSourceCodeUrl = () => {
  Linking.openURL(sourceCodeURL);
};

const openReportIssuesUrl = () => {
  Linking.openURL(reportIssuesURL);
};

export default function Configurations(props: ConfigurationsProps) {
  const { navigation } = props;
  const {
    localization,
    setActualLanguage,
    selectedCurrency,
    setSelectedCurrency,
  } = useAppStore();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{localization.t("settings")}</Text>
        <View style={styles.settingsContainer}>
          <View style={styles.languageOptionsContainer}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>
              {localization.t("currency")}
            </Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={dropdownCurrencyOptions}
              value={selectedCurrency}
              style={styles.languageDropdown}
              selectedTextStyle={styles.selectedLanguage}
              onChange={(selectedOption) => {
                setSelectedCurrency(selectedOption.value);
              }}
            />
          </View>
          <View style={styles.languageOptionsContainer}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>
              {localization.t("language")}
            </Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={dropDownLanguageOptions}
              value={localization.locale}
              style={styles.languageDropdown}
              selectedTextStyle={styles.selectedLanguage}
              onChange={(selectedOption) => {
                setActualLanguage(selectedOption.value);
              }}
            />
          </View>
        </View>

        <Text style={styles.secondaryTitle}>{localization.t("support")}</Text>
        <View style={styles.supportContainer}>
          <TouchableOpacity onPress={openSourceCodeUrl}>
            <View style={styles.supportItemContainer}>
              <View style={styles.supportItemContentContainer}>
                <CodeIcon color="#DF7800" width={24} height={24} />
                <Text style={styles.text}>{localization.t("source_code")}</Text>
              </View>

              <Text
                style={{
                  fontSize: 18,
                }}
              >
                🔗
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={openReportIssuesUrl}>
            <View style={styles.supportItemContainer}>
              <View style={styles.supportItemContentContainer}>
                <BugIcon color="#DF7800" width={24} height={24} />
                <Text style={styles.text}>
                  {localization.t("report_issues")}
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 18,
                }}
              >
                🔗
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ButtonsNavigation navigation={navigation} actualScreen="Settings" />
    </View>
  );
}
