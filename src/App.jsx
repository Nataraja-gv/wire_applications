import { ThemeProvider } from "@mui/material";
import "./App.css";
import Router from "./routes/";
import { theme } from "./theme";
import ContextProvider from "./context/tickets-context/context"


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <Router />
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
