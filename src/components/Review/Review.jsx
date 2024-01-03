import ReviewCard from "../../layouts/ReviewCard";
import client1 from "../../assets/img/client1.jpg";
import client2 from "../../assets/img/client2.jpg";
import client3 from "../../assets/img/client3.jpg";
import client4 from "../../assets/img/client4.jpg";
import client5 from "../../assets/img/client5.jpg";
import client6 from "../../assets/img/client6.jpg";

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
        <h1 className="text-4xl font-semibold text-center lg:pt-48 pt-24 pb-10">What Our Clients Say</h1>
        <div className="flex flex-wrap md:flex-row gap-8 mt-5 justify-center items-center">
            <ReviewCard img={client1} name="Jack McDougal"></ReviewCard>
            <ReviewCard img={client2} name="Charlotte Cooper"></ReviewCard>
            <ReviewCard img={client3} name="Rob Halliday"></ReviewCard>
            <ReviewCard img={client4} name="Christopher Lamb"></ReviewCard>
            <ReviewCard img={client5} name="Victoria June"></ReviewCard>
            <ReviewCard img={client6} name="Johnson Ames"></ReviewCard>
        </div>
    </div>
  );
};

export default Review;