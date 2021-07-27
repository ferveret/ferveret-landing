import React, { useEffect } from "react";

import Aos from "aos";

import { Button } from "../components/button/Button";
import { Video } from "../components/video/Video";

const Hero = () => {
  // AOS animation library initialization
  useEffect(() => {
    Aos.init({
      duration: 3000,
      delay: 200,
    });
  }, []);

  return (
    <div
      className="bg-gray-1300  lg:w-full lg:h-full"
      style={{ fontFamily: "Mulish" }}
    >
      <div className="p-6">
        <div className="flex flex-col  lg:flex-row  lg:w-full lg:h-full p-3 flex-shrink-0 shadow rounded-md	bg-primary-1100">
          <div className="lg:w-full lg:h-full lg:pr-4 pb-4 flex flex-col">
            <div
              data-aos="fade-up"
              className="text-left  xl:pt-12 xl:px-12 p-6 pt-4"
            >
              <h1 className="lg:text-2xl text-2xl text-gray-1200 font-black">
                /fervēret/
              </h1>
              <p>
                Ferveret is a Latin word for boiling, which is what we believe
                will revolutionize the future of data centers.
              </p>
              <hr
                className="mt-6 bg-gray-1300"
                style={{
                  height: "3px",
                  border: "none",
                  // background: "rgb(255,255,255)",
                }}
              />
              <div className="xl:text-4xl lg:text-3xl  text-2xl w-full  mt-6 mb-16 mr-12 text-left text-gray-1200 font-black">
                <p>
                  Ferveret develops{" "}
                  <span className="text-logo-100">
                    liquid cooling technology
                  </span>{" "}
                  enabling the most advanced, efficient, cost-competitive and
                  sustainable data center ever made
                </p>
              </div>
              <div className="flex flex-row justify-start mt-20 pb-12 ">
                <input
                  style={{ width: "80%", padding: "2%" }}
                  placeholder="email"
                  type="text"
                  className="bg-gray-1300 text-line"
                />

                <Button primary>
                  <span style={{ fontSize: "16px" }}>Learn More</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-1100 lg:w-full h-full rounded-md shadow-md m-auto">
            <Video src="/assets/videos/video4.mp4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
