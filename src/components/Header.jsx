import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-center bg-[#b6e1fd]">
        <input
          type="text"
          placeholder="Search pokemon"
          className="p-4 w-3/4 bg-[#94d0f8] my-8 text-xl text-white shadow focus:outline-none hover:bg-[#68c1fc] placeholder:text-white"
          onClick={(event) => event.target.value}
        />
      </header>
    </>
  );
};

export default Header;
