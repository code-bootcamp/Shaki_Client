export const lightTheme = {
  MAIN: "#000000",
  SUB: "#fff",
  BACKGROUND: "#fdfdff",
  LAYOUT: "#fdfdff",
  SUBBACKGROUND: "rgb(242, 240, 253)",
  FOOTERBACKGROUND: "#f6f7fb",
};

export const darkTheme: Theme = {
  MAIN: "#fff",
  SUB: "#000",
  BACKGROUND: "#202124",
  LAYOUT: "#343434",
  SUBBACKGROUND: "#30373e",
  FOOTERBACKGROUND: "#343434",
};

export type Theme = typeof lightTheme;
