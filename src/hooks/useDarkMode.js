import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext is used outside of DarkModeProvider.");
  return context;
};

export default useDarkMode;
