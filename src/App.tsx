import { BrowserRouter } from "react-router";
import "./App.css";
import Routing from "./components/routing";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routing />
      <ToastContainer position="bottom-left" theme="colored" />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
