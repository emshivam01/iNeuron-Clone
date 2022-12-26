import ReactDOM from "react-dom/client";
import Hero from "./Components/Hero";
import NavbarMain from "./Components/NavbarMain";
import NavbarTwo from "./Components/NavbarTwo";
import "./index.css";
import "./Components/hero.css";
import Hero2 from "./Components/Hero2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavbarMain imgUrl="./src/assets/ineuron-logo.png" />
    <NavbarTwo />
    <Hero />
    <Hero2 />
  </>
);
