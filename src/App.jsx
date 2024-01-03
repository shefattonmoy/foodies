import About from "./components/About/About";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Recipe from "./components/Recipe/Recipe";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";

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

        <div id="reviews">
          <Review></Review>
        </div>

        <div id="footer">
          <Footer></Footer>
        </div>
      </main>
    </div>
  )
}

export default App;
