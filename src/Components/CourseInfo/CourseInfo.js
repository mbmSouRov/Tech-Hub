import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseInfo = () => {
  const info = useLoaderData();
  const datas = info[0];
  const ref = React.createRef();
  const id = datas.id;
  const name = datas.company.name;
  const feature = datas.feature;
  const picture = datas.photoURL;
  const price = datas.price;
  const learnMore = datas.website;

  const exampleRef = useRef();

  console.log(datas);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={picture}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="course-img"
          />
          <div>
            <div className="flex justify-center items-center">
              <h1 className="text-5xl font-bold text-left">{name}</h1>

              <Pdf targetRef={exampleRef} filename={"mew.pdf"}>
                {({ toPdf }) => (
                  <button className="btn btn-primary" onClick={toPdf}>
                    FREE DOWNLOAD
                  </button>
                )}
              </Pdf>
            </div>
            <h1 ref={exampleRef} className="py-6  text-left">
              {feature}
            </h1>
            <div className="flex justify-between items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div>
                <p>
                  Price <span className="text-rose-700">${price}</span>
                </p>
              </div>
              <div>
                <p>
                  To learn More,
                  <span className="text-rose-900 link-hover">
                    <a target="_blank" href={learnMore} rel="noreferrer">
                      Visit Website
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-96">
          <button className="btn btn-outline btn-primary">
            <Link to={`/checkout/id/${id}`}>GET PREMIUM ACCESSS</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
