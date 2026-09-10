import "./App.css";
import About from "./components/about";
import Button from "./components/button";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div>
        <About />
        {/* <Button buttonName={"Confirm"} bgColor={"Green"} />
        <Button bgColor={"Magenta"} />
        <Button buttonName={"Submit"} bgColor={"Blue"} />
        <Button buttonName={"Cancel"} /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;

export function App2() {
  return <></>;
}
