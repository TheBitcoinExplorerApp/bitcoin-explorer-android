import { FeesType } from "src/components/PrioritiesTax/types";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";

const formatFees = (fees: FeesType): SmallBox[] => {
  return [
    {
      title: `${fees.hourFee}`,
      value: "0",
    },
    {
      title: `${fees.halfHourFee}`,
      value: "0",
    },
    {
      title: `${fees.fastestFee}`,
      value: "0",
    },
  ];
};

export default formatFees;
