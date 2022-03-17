import { Banner } from "./components/Banner";
import { Cards } from "./components/Cards";
import { LargeCards } from "./components/LargeCards";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <div>
      <NavBar firstname="" lastname="" link="" />
      <Banner />
      <Cards/>
      <LargeCards />
    </div>
  );
}

export default App;
