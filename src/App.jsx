import React from "react";

const App = () => {
  return (
    <div className=" min-h-screen bg-[#141414] flex justify-center items-center">
      <div className="bg-[#1f1f1f] w-[330px] h-[530px] rounded-lg ">
        <div className="mt-9 text-center text-white ">
          <img
            src="avatar-jessica.jpeg"
            className="rounded-full w-[75px] mx-auto object-cover"
            alt=""
          />
          <h1 className="mt-5 text-2xl font-bol leading-10">Jessica Randall</h1>
          <p className="text-xs font-semibold text-[#c5f82a]">London, United Kingdom</p>
          <p className="mt-5 font-semibold text-xs text-[#b3b3b3]">"Front-end developer and avid reader."</p>
          <button className="text-xs hover:text-black  font-semibold mt-5 bg-[#333333] py-3 w-[270px] rounded-md shadow-sm hover:shadow-md hover:bg-[#c5f82a] transition-all">GitHub</button>
          <button className="text-xs text-gray-100 font-semibold mt-4 bg-[#333333] py-3 w-[270px] rounded-md shadow-sm hover:shadow-md hover:bg-[#c5f82a] hover:text-black transition-all">Frontend Mentor</button>
          <button className="text-xs text-gray-100 font-semibold mt-4 bg-[#333333] py-3 w-[270px] rounded-md shadow-sm hover:shadow-md hover:bg-[#c5f82a] hover:text-black transition-all">Linkedin</button>
          <button className="text-xs text-gray-100 font-semibold mt-4 bg-[#333333] py-3 w-[270px] rounded-md shadow-sm hover:shadow-md hover:bg-[#c5f82a] hover:text-black transition-all">Twitter</button>
          <button className="text-xs text-gray-100 font-semibold mt-4 bg-[#333333] py-3 w-[270px] rounded-md shadow-sm hover:shadow-md hover:bg-[#c5f82a] hover:text-black transition-all">Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default App;
