import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type themeContextType = {
  theme: Theme;
  toggletheme: () => void;
};

type Props = {
  children: ReactNode;
};
export const themeContext = createContext<themeContextType | undefined>(
  undefined,
);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggletheme = () => {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
export default ThemeProvider;
