import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseInfo = () => {
  const info = useLoaderData();
  const datas = info[0];
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
      <div className="hero bg-base-200 lg:flex flex-col">
        <div
          className="hero-content flex-col justify-center
         lg:flex-row mt-12 lg:p-10 p-0"
        >
          <img
            src={picture}
            className="rounded-lg shadow-2xl lg:w-max w-60"
            alt="course-img"
          />
          <div>
            <div className="lg:flex justify-center items-center">
              <h1 className="lg:text-5xl text-2xl font-bold lg:text-left text-center">
                {name}
              </h1>

              <Pdf targetRef={exampleRef} filename={"mew.pdf"}>
                {({ toPdf }) => (
                  <button
                    className="btn btn-primary lg:mt-0 mt-6"
                    onClick={toPdf}
                  >
                    FREE DOWNLOAD
                  </button>
                )}
              </Pdf>
            </div>
            <h1 ref={exampleRef} className="py-6 px-2 lg:text-left text-center">
              {feature}
            </h1>
            <div className=" justify-between items-center">
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
                <p className="p-2">
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
      </div>
      <div className="lg:my-8 my-5">
        <button className="btn btn-outline btn-primary">
          <Link to={`/checkout/id/${id}`}>GET PREMIUM ACCESSS</Link>
        </button>
      </div>
    </div>
  );
};

export default CourseInfo;
