import RecipeCard from "../../layouts/RecipeCard";
import menu1 from "../../assets/img/menu1.jpg"
import menu2 from "../../assets/img/menu2.jpg"
import menu3 from "../../assets/img/menu3.jpg"
import menu4 from "../../assets/img/menu4.jpg"
import menu5 from "../../assets/img/menu5.jpg"
import menu6 from "../../assets/img/menu6.jpg"
import menu7 from "../../assets/img/menu7.jpg"
import menu8 from "../../assets/img/menu8.jpg"
import menu9 from "../../assets/img/menu9.jpg"

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">Premium Menu</h1>
        <div className="flex flex-wrap gap-8 justify-center">
            <RecipeCard img={menu1} title="Hamburger" price="$17.99"></RecipeCard>
            <RecipeCard img={menu2} title="Cheese Pizza" price="$15.99"></RecipeCard>
            <RecipeCard img={menu3} title="Beef Steak" price="$22.99"></RecipeCard>
            <RecipeCard img={menu4} title="Salmon Fish" price="$18.99"></RecipeCard>
            <RecipeCard img={menu5} title="Plate Pizza" price="$13.99"></RecipeCard>
            <RecipeCard img={menu6} title="Pancake" price="$10.99"></RecipeCard>
            <RecipeCard img={menu7} title="Dill Potatoes" price="$11.99"></RecipeCard>
            <RecipeCard img={menu8} title="Salami Sausage" price="$14.99"></RecipeCard>
            <RecipeCard img={menu9} title="Chicken Curry" price="$12.99"></RecipeCard>
        </div>
    </div>
  );
};

export default Menu;