
import "./App.css";
import Navbar from "./Navbar";
import ThemeProvider from "./context/Theme";

function App() {

  return (
    <>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
