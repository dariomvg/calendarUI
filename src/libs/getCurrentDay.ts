import { Month } from "@/types/types";
import { months } from "@/utils/months";

export const getDate = (date: Date): Month => {

  const year = date.getFullYear();
  const month = date.getMonth();

  const nameMonth = months[month];
  const numberDays = new Date(year, month + 1, 0).getDate();

  return {
    name: nameMonth,
    year,
    days: numberDays,
  };
};
