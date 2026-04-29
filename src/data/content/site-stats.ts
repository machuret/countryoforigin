/**
 * Headline stats shown on the home hero. Each value is split into a
 * leading number and an optional suffix (rendered as small caps).
 */
export type HomeStat = {
  value: string;
  suffix?: string;
  label: string;
  highlight?: boolean;
};

export const homeStats: HomeStat[] = [
  {
    value: "$3",
    suffix: "B",
    label: "Annual contribution of seafood to the Australian economy",
    highlight: true,
  },
  {
    value: "600",
    suffix: "+",
    label: "Edible marine species found in Australian waters",
  },
  {
    value: "37",
    suffix: "%",
    label: "of Australians don't know where their seafood comes from",
  },
  {
    value: "4",
    suffix: "th",
    label: "Largest exclusive economic zone in the world",
  },
];
