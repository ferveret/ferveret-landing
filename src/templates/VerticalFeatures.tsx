import React, { useEffect } from "react";

import Aos from "aos";

import "aos/dist/aos.css";
import { Button } from "../components/button/Button";
import { FounderCard } from "../components/cards/FounderCard";
import { MetricCard } from "../components/cards/MetricCard";
import { Video } from "../components/video/Video";

const VerticalFeatures = () => {
  // AOS animation library initialization
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="md:grid-rows-10">
      <div className="flex flex-col items-center pt-40 bg-gray-1300 px-6 sm:px-12 md:px-16 lg:px-60">
        <h1 className="text-4xl font-bold text-gray-1200 pt- p-12 text-center">
          Data centers are dirty and expensive{" "}
        </h1>
        <p className="text-1xl text-gray-1200 text-center" data-aos="fade-up">
          If nothing changes, data centers will generate about 14% of the total
          worldwide carbon emission by 2040. About 40% of these emissions is due
          to inefficient cooling, which is also expensive.
        </p>
        <div className="pt-36  pb-32" data-aos="fade-up" data-aos-delay="1000">
          <img className="h-full w-full" src="/assets/images/lineCharts.png" />
        </div>
      </div>
      <div className="max-w-screen-xlg bg-gray-1100 px-6 sm:px-12 md:px-16 lg:px-60">
        <div className="text-center pt-36 pb-5">
          <h2 className="text-4xl text-gray-200 font-bold">
            Data centers today – Air cooled
          </h2>

          <div
            className="m-auto w-full py-36 bg-gray-1100"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <Video src="/assets/videos/video1.mp4" delay={1000} />
          </div>
          <div
            className="m-auto text-gray-200 text-1xl pb-12 text-center"
            data-aos="fade-up"
          >
            Air cooling technology exhibits poor heat removal capabilities
          </div>
          <ul className="flex flex-row text-left space-x-10">
            <li className="text-gray-200">
              • 40% of the total electricity in a typical data centers today is
              wasted for cooling the servers.
            </li>
            <li className="text-gray-200">
              • Air cooling results in a waste of space.
            </li>
            <li className="text-gray-200">
              • Air cooling has high maintenance and labor costs
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xlg bg-gray-1100 px-6 sm:px-12 md:px-16 lg:px-60">
        <div className="text-center pt-32 pb-5 flex flex-col space-y-12">
          <h2 className="text-4xl text-gray-200 font-bold">
            FERVERET technology – Subcooled boiling
          </h2>
          <div
            className="mt-4 text-gray-200 text-1xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Eliminates this waste of money and the associated emissions.
          </div>
          <div
            className="m-auto w-full py-30 bg-gray-1100"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <Video src="/assets/videos/video2.mp4" delay={1000} />
          </div>
        </div>
      </div>
      <div className="bg-gray-1100 flex flex-wrap justify-evenly pt-20 pb-48 px-6 sm:px-12 md:px-16 lg:px-60">
        <MetricCard
          title="Energy"
          description="Saves 96% of the energy wasted for cooling in air-cooled data
          center."
          icon={<img src="/assets/icons/energyIcon.png" />}
        />
        <MetricCard
          title="Footprint"
          description="Same IT power as air-cooled data centers in a 75% smaller
          footprint."
          icon={<img src="/assets/icons/footPrint.png" />}
        />
        <MetricCard
          title="Cost"
          description="Minimumize maintenance and labor costs."
          icon={<img src="/assets/icons/costIcon.png" />}
        />
        <MetricCard
          title="Performance"
          description="Reduces the chip temperature by a factor 2
          enabling more powerful (~2X) CPUs and GPUs"
          icon={<img src="/assets/icons/performanceIcon.png" />}
        />
      </div>
      <div className="flex md:flex-row flex-col  bg-gray-2000 ">
        <div className="flex flex-col w-1/2 justify-start pl-6 sm:pl-12 md:pl-16 lg:pl-60">
          <div
            className="font-bold md:text-left text-gray-1900 text-3xl text-center md:text-2xl pt-10"
            data-aos="fade-right"
          >
            How does ferveret technology work?
          </div>
          <div
            className="text-gray-1900 text-1xl md:text-left w-full"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Our technology uses a cooling process called subcooled nucleate
            boiling. This is the cooling process used in nuclear reactors, by
            which our tank design is inspired.
          </div>
          <div
            className="text-gray-1900 text-1xl md:text-left w-full"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Our tanks can turn your air-cooled data center into a
            Ferveret-cooled data center. overnight.
          </div>
          <div
            className="font-bold md:text-left text-gray-1900 text-3xl text-center md:text-2xl pt-10"
            data-aos="fade-right"
          >
            How are technology is different than our competitors?
          </div>
          <div
            className="text-gray-1900 text-1xl md:text-left"
            data-aos="fade-right"
            data-aos-delay="750"
          >
            There are many companies in the immersion cooling space. Their
            technology is either based on single The picture of Ferveret data
            center Video of air cooled racked and how boards will go to our tank
            phase immersion cooling or two phase immersion cooling. Each company
            tries to make the case that one is better than the other one.
          </div>
          <div
            className="text-gray-1900 text-1xl md:text-left"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            At Ferveret, we understand pro and cons of both techniques, so our
            technology combines both. We take advantages of their pros, and
            eliminate the cons
          </div>
          <div
            className="text-gray-1900 text-1xl md:text-left"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            Subcooled nucleate boiling allows removing exceptionally high heat
            fluxes from processors or other heat generating components. While we
            take advantage of the phase change (i.e., boiling) on top of the
            heat source, everything looks like a single phase immersion cooling
            solution from outside. With our solution there is no vapor plenum on
            top of our tank, which helps reducing fluid losses significantly
            compared to conventional two phase immersion cooling.
          </div>
        </div>
        <div className="w-full h-full">
          <Video src="/assets/videos/video3.mp4" />
        </div>
      </div>
      <div className="flex xl:flex-row flex-col space-x-40 bg-gray-1300 py-36 px-6 sm:px-12 md:px-16 lg:px-60">
        <div className="flex flex-col md:flex-1 space-y-12 justify-start md:p-6 m:pr-12">
          <div
            className="font-black text-left text-gray-1200 text-4xl"
            data-aos="fade-right"
          >
            Air cooling vs Immersion cooling
          </div>
          <hr
            className="mt-20"
            style={{
              height: "3px",
              border: "none",
              // background: "rgb(255,255,255)",
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 4%, rgba(78,129,249,1) 51%, rgba(255,255,255,1) 98%)",
            }}
            data-aos="fade-right"
          />
          <div
            className="text-gray-1200 md:text-1xl text-left"
            data-aos="fade-right"
          >
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>

          <div
            className="text-gray-1200 md:text-1xl text-left"
            data-aos="fade-right"
          >
            palceholder palceholder palceholder palceholderpalceholder
          </div>
        </div>
        <div
          className="bg-gray-1300 md:w-6/12 m-auto md:pt-12 flex items-center"
          data-aos="fade-left"
        >
          <img src="/assets/images/verticalBarChart.png" />
        </div>
      </div>
      <div className="flex flex-col bg-gray-1300 pt-12 text-center px-6 sm:px-12 md:px-16 lg:px-60">
        <div className="text-gray-1200 text-3xl font-black">
          Co2 emission reduction
        </div>
        <div className="pt-8 text-gray-1200 md:text-1xl m-auto w-7/12">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </div>
      </div>
      <div className="bg-gray-1300 pt-24 px-6 sm:px-12 md:px-16 lg:px-60 flex flex-col items-center m-auto">
        <img src="/assets/images/horizontalBarChart.png" />
      </div>
      <div className="bg-gray-1300 pt-44 flex flex-col  m-auto items-center px-6 sm:px-12 md:px-16 lg:px-60">
        <hr
          style={{
            borderTop: "7px solid #DCDCDC",
            width: "70%",
          }}
        />
      </div>
      <div className="bg-gray-1300 text-center pt-40 pb-16 px:8 sm:px-12 md:px-16 lg:px-60">
        <div className="m-auto text-4xl font-bold text-gray-1800">
          Our Founders
        </div>
      </div>
      <div className="bg-gray-1300 flex flex-col xl:flex-row xl:space-x-3 justify-evenly pb-40 pt-8 px:8 sm:px-12 md:px-16 lg:px-60 items-center">
        <FounderCard
          name="Reza Azizian"
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.`}
          image="/assets/images/founder1.png"
        />
        <FounderCard
          name="Matteo Bucci"
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.`}
          image="/assets/images/founder2.png"
        />
      </div>
      <div className="bg-gray-1700 flex flex-col space-y-3  px:8 sm:px-12 md:px-16 lg:px-60">
        <div className="m-auto lg:text-3xl text-2xl font-bold text-gray-1800 pt-10">
          Contact Ferveret
        </div>
        <div className="flex justify-center pt-5">
          <input className="w-2/5 h-12 border-1" />
        </div>
        <div className="flex justify-center pt-5 pb-10">
          <Button primary>Submit</Button>
        </div>
      </div>
      <div className="h-48 bg-gray-1300" />
    </div>
  );
};

export { VerticalFeatures };
