import { BrowserRouter } from "react-router";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Routing from "./components/routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

export function App2() {
  return <></>;
}
