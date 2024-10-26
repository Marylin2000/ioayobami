import React from "react";

function TestimonialCard({ data }) {
  return (
    <div className="md:w-1/4 shrink-0 shadow-lg mx-5 flex flex-col py-5 px-5 my-5 hover:shadow-2xl items-center ">
      <div className="w-[200px] h-[200px] overflow-hidden rounded-full my-3 ">
        <img src={data.image} alt={data.alt} width={500}  className=" " />
      </div>
      <div className=" flex flex-col items-center ">
        <p className="text-center text-xs ">{data.text}</p>
        <h3>{data.name}</h3>
        <h4>{data.title}</h4>
      </div>
    </div>
  );
}

export default TestimonialCard;
