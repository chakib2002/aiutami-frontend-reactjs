import { Banner } from "./components/Banner";
import { Cards } from "./components/Cards";
import { LargeCards } from "./components/LargeCards";
import { NavBar } from "./components/Navbar";
import { Section } from "./components/Section";
import {Footer} from './components/Footer';

function App() {
  return (
    <div>
      <NavBar firstname="" lastname="" link="" />
      <Banner />
      <Cards/>
      <LargeCards />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
