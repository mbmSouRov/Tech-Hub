import React from "react";
import { Link } from "react-router-dom";

const ContentDetails = ({ data }) => {
  const { id } = data;
  console.log(id);
  const info = data.company.name;
  const feature = data.feature;
  const imgage = data.photoURL;
  console.log(imgage);
  return (
    <div>
      <Link to={`/courseInfo/${id}`}>
        <div className="card w-80 h-84 bg-base-100 shadow-xl">
          <figure className="px-6 pt-6">
            <img src={imgage} alt="course-img" className="rounded-xl h-40" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{info}</h2>
            <p>
              {feature.slice(0, 100) + "......"}
              <span className="p-0.5 hover:bg-rose-800 hover:text-white rounded-md cursor-pointer">
                Read More
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentDetails;
