import Home from "./components/Home/Home";
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

        
      </main>
    </div>
  )
}

export default App;
