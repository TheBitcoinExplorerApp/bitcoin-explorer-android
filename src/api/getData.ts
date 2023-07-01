import { FeesType } from "src/components/PrioritiesTax/types";
import { taxTransactions } from "src/env/apiLinks";

export const getTaxes = async () => {
    const response = await fetch(taxTransactions);
    const data: FeesType = await response.json();
    return data;
}