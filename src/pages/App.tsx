import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import Button from "@mui/material/Button";
import Button1 from "@components/ui/Button";

const ColorModeContext = createContext({ toggleColorMode: () => {} });
const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  // 颜色模式
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  // MUI主题配置
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <div className="underline">React Hello </div>
            <Button variant="contained">mui Button</Button>
            <Button1>二封mui button</Button1>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </StyledEngineProvider>
    </>
  );
};
export default App;
