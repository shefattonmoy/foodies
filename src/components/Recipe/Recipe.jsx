import RecipeCard from "../../layouts/RecipeCard";
import dish1 from "../../assets/img/dish1.jpg";
import dish2 from "../../assets/img/dish2.jpg";
import dish3 from "../../assets/img/dish3.jpg";
import dish4 from "../../assets/img/dish4.jpg";
import dish5 from "../../assets/img/dish5.jpg";
import dish6 from "../../assets/img/dish6.jpg";


const Recipe = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-5 lg:px-32">
        <h1 className="text-4xl text-center font-semibold pt-24 pb-10">Our Recipes</h1>
        <div className="flex flex-wrap gap-8 justify-center">
            <RecipeCard img={dish1} title="Indian Dish" price="$14.99"></RecipeCard>
            <RecipeCard img={dish2} title="Italian Dish" price="$17.99"></RecipeCard>
            <RecipeCard img={dish3} title="Mexican Dish" price="$11.99"></RecipeCard>
            <RecipeCard img={dish4} title="Italian Dish" price="$19.99"></RecipeCard>
            <RecipeCard img={dish5} title="Mexican Dish" price="$12.99"></RecipeCard>
            <RecipeCard img={dish6} title="Spanish Dish" price="$11.99"></RecipeCard>
        </div>
    </div>
  );
};

export default Recipe;