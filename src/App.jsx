import About from "./components/About/About";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Recipe from "./components/Recipe/Recipe";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main>

        <div id="home">
          <Home></Home>
        </div>

        <div id="recipe">
          <Recipe></Recipe>
        </div>

        <div id="about">
          <About></About>
        </div>

        <div id="menu">
          <Menu></Menu>
        </div>
      </main>
    </div>
  )
}

export default App;
