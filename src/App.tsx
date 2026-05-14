import { Box } from "@mui/material";
import Header from "./components/layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Header />
      <Home />
    </Box>
  );
}

export default App;
