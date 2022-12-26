import Card from "./Card";

function Hero2() {
  return (
    <div className="px-24 py-12">
      <p className="text-center text-4xl font-bold text-[#233c7b] mb-2">
        "Pure Hardwork, No Shortcuts!"
      </p>
      <hr className="h-1 text-center w-28 m-auto bg-[#ea8e30] mb-8" />
      <div className="flex w-full justify-around">
        <Card
          imgUrl="../assets/books-icon.svg"
          count="600+"
          cardName="Different Courses"
          altText="Course Icon"
        />
        <Card
          imgUrl="../assets/student-icon.svg"
          count="500000+"
          cardName="Students Enrolled"
          altText="Student Icon"
        />
        <Card
          imgUrl="../assets/credit-card-icon.svg"
          count="10000+"
          cardName="Successful Transition"
          altText="Credit-Card Icon"
        />
      </div>
    </div>
  );
}

export default Hero2;
