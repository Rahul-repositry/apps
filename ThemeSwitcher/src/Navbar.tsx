import { useTheme } from "./context/Theme";

const Navbar = () => {
  const { theme, toggletheme } = useTheme();
  const handleTheme = () => {
    toggletheme();
  };

  return (
    <>
      navbar is here <button onClick={handleTheme}>{theme}</button>
    </>
  );
};

export default Navbar;
