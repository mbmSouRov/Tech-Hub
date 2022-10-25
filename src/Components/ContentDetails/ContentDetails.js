import React from "react";

const ContentDetails = ({ data }) => {
  const info = data.company.meaning;
  const feature = data.feature;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {info} <button className="btn btn-primary">Download PDF</button>
          </h2>
          <p>{feature}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
