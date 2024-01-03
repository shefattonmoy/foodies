import {BsStarFill, BsStarHalf} from "react-icons/bs";
import Button from "./Button";

const RecipeCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
        <img className="rounded-xl" src={props.img} alt="img" />
        <div className="space-y-4">
            <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
            <div className="flex flex-row justify-center">
                <BsStarFill className="text-brightColor"></BsStarFill>
                <BsStarFill className="text-brightColor"></BsStarFill>
                <BsStarFill className="text-brightColor"></BsStarFill>
                <BsStarFill className="text-brightColor"></BsStarFill>
                <BsStarHalf className="text-brightColor"></BsStarHalf>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
                <h3 className="font-semibold text-lg">{props.price}</h3>
                <Button title="Buy Now"></Button>
            </div>
        </div>
    </div>
  );
};

export default RecipeCard;