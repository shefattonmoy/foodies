import img from "../../assets/img/about.jpg";
import Button from "../../layouts/Button";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
            <img className="w-1/2" src={img} alt="img" />
            <div className="space-y-4 lg:pt-14 p-12">
                <h1 className="font-semibold text-4xl text-center md:text-start">Why Choose Us?</h1>
                <p className="text-md">Indulge in a symphony of flavors that dance on your palate,
                    meticulously curated to satisfy even the most discerning food enthusiasts.
                    Our menu reflects a commitment to quality,
                    with a diverse array of mouthwatering options,
                    catering to various tastes and dietary preferences.
                </p>
                <p className="text-md">
                    Immerse yourself in a warm and inviting ambiance that complements the artistry of our cuisine.
                    Whether you're here for a casual meal with friends, a romantic dinner,
                    or a special celebration, our attentive staff is dedicated to ensuring your experience is nothing short of exceptional.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <Button title="Learn More"></Button>
                </div>
            </div>
        </div>
    );
};

export default About;