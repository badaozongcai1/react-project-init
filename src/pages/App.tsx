import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "@/routes/index";
import { HelmetProvider } from "react-helmet-async";

const ColorModeContext = createContext({ toggleColorMode: () => {} });
const App = () => {
  const routing = useRoutes(routes);
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
  // 仅在开发环境中初始化 vConsole，移动端使用
  // if (process.env.NODE_ENV === "development") {
  //   // eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
  //   const VConsole = require("vconsole");
  //   new VConsole();
  // }
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <HelmetProvider>{routing}</HelmetProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </StyledEngineProvider>
    </>
  );
};
export default App;
