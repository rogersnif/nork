import React from "react";

export default function Galrery() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center m-[5%] ">
        <div className="bg-slate-900 mt-40 flex flex-col items-center  w-[100%] h-[350px]">
          <div className="bg-[url('/house.jpg')] w-[70%] h-[200px] bg-cover sm:bg-contain  rounded-2xl  absolute mt-[-30px] md:w-[30%]"></div>

          <div className="w-60% h-[320px] flex flex-col justify-end items-center px-[15%]">
            <div>
              <p className="text-slate-200 text-[14px]  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                voluptates est, possimus temporibus impedit recusandae obcaecati
                voluptate unde, explicabo provident dignissimos ratione vel
              </p>
              <button className="border-2 border-b-sky-600 border-t-slate-900 border-r-slate-900 border-l-slate-900 text-orange-300">
                Galery
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-5 mt-[25%] mx-[5%]">
            <div className="bg-[url('/project2.jpg')] w-[30%] h-[100px] bg-cover sm:bg-contain md:bg-cover  lg:bg-cover bg-no-repeat  rounded-2xl"></div>

            <div className="w-[70%]">
              <p className="text-[12px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                consequuntur eos accusantium, debitis tenetur nobis!
                consequuntur eos accusantium, debitis tenetur nobis!
              </p>
              <button className="border-2 border-b-sky-600 border-t-white border-r-white border-l-white text-slate-900">
                Galery
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-5 mt-[25%] mx-[5%]">
            <div className="bg-[url('/project3.jpg')] w-[30%] h-[100px] bg-cover sm:bg-contain md:bg-cover  lg:bg-cover bg-no-repeat  rounded-2xl"></div>

            <div className="w-[70%]">
              <p className="text-[12px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                consequuntur eos accusantium, debitis tenetur nobis!
                consequuntur eos accusantium, debitis tenetur nobis!
              </p>
              <button className="border-2 border-b-sky-600 border-t-white border-r-white border-l-white text-slate-900">
                Galery
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
