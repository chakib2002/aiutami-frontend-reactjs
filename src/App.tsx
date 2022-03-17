import { Login } from "./components/Login";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <div>
      <NavBar firstname="" lastname="" link="" auth={true}/>
      <Login />
    </div>
  );
}

export default App;
