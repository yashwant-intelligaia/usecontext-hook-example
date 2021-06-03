import { useContext } from "react";
import { ThemeContext } from "./App";
function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button style={theme.button}>Submit</button>;
}

export default ThemeButton;
