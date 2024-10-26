import React from "react";

function PortfolioCard({ portfolio }) {
  return (
    <div className="flex items-center shadow-2xl hover:shadow-[#353daf] flex-col w-full">
      <div className="h-[300px] w-full overflow-hidden">
        <img
          src={portfolio.image}
          alt={portfolio.imageAlt}
          className=" rounded-lg "
        />
      </div>
      <div className="flex w-full  items-center  shadow-md justify-between p-1">
        <h3>{portfolio.title}</h3>
        <a
          className="text-4xl bg-[#353daf]  text-white py-2 px-4 rounded-r-sm border-[2px] border-[#353daf] hover:bg-white"
          href={portfolio.link}
          data-lightbox="portfolio"
        >
          +
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;
