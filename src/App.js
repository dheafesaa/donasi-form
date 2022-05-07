import Box from "@mui/material/Box";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import "./App.css";

const App = () => {
  return (
    <>
      <Box sx={{flexGrow: 1}}>
        <Header />
        <Content />
      </Box>
    </>
  );
}

export default App;
