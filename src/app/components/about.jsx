"use client";
import { useState } from "react";

export default function About() {
  let text1 = (
    <div className="border-y-4 border-orange-400 py-5">
      Establish in Cape Town South Africa , Norkay Construction has evolved into
      a cohesive collective of expert engineers, technicians , project managers,
      construction manager, as well as professional builders in the construction
      industry delivering economical solutions for community development and
      specialized services across diverse fields in the construction industry.
      our comprehensive construction methods, on site design, and management
      ethos fosters a holistic approach to project development, tailored to
      precisely meet our clients’ needs We are unwavering in our commitment to
      upholding superior professional standard in Construction. Engennering as
      well as project management within the built Environement industry
      fostering a culture of continuous improvement to ensure employee pride and
      client satisfaction. Our vision is to be the preferred contractors
      globally, recognized for our innovation and leadership in the Engineerng
      and building Enironments Sector.
    </div>
  );

  let text2 = (
    <div className="border-y-4 border-teal-800 py-5">
      with a proud experts with a legacy of contributing to outstanding
      completed projects that uplift and empower historically disadvantaged
      communities, we are company owned and operated by previously disadvantaged
      individuals, dedicated to delivering quality services and fostering
      empowerment through training and developement initiatives. Under the
      leadership of founding director Mr. Gogol Nakweti, Norkay Construction
      operates across several divisions. dedicated to driving forward our
      mission, dedicated to driving forward our mission with precision and
      integrity in 2024 we adoted a quality policy aligning with ISO 9001 2008
      standards, ensuring a globally recognized quality assurance system accros
      our Construction methods, filed design and Project Management services.
      Aligning with the B-BBEE, and Membership with the National Home Builder
      Registration Counsil(NHBRC) further attest to our Commitment to excellence
      and sustainability.
    </div>
  );

  const [text, setText] = useState(text1);
  const [texttrack, setTexttrack] = useState(false);

  function changetext1() {
    setText(text1);
    setTexttrack(true);
  }
  function changetext2() {
    setText(text2);
    setTexttrack(false);
  }

  return (
    <>
      <div className="mt-[200px] flex flex-col justify-center px-[5%]">
        <p className="text-[60px]">About US</p>
        {text}
        <div>
          <div className=" flex flex-row  justify-center gap-3 border-b-4 border-orange-400 py-5 w-[50%]  "></div>

          <button
            onClick={changetext1}
            className="px-[20px] py-[2px] bottom-1"
            style={{ background: texttrack ? "silver" : "" }}
          >
            Part1
          </button>
          <button
            className="px-[20px] py-[2px] bottom-1"
            onClick={changetext2}
            style={{ background: texttrack ? "" : "silver" }}
          >
            Part2
          </button>
        </div>
      </div>
    </>
  );
}
