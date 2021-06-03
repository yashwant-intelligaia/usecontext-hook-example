import React, { createContext } from "react";
import theme from "./theme";
import Toolbar from "./Toolbar";
export const ThemeContext = createContext(theme);
function App() {
  return (
    <ThemeContext.Provider value={theme.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App;
