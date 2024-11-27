
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <div className=" backdrop-blur-md bg-opacity-50 text-right text-xl text-black p-10 bg-slate-200 fixed top-0 w-full">
        <Link className="p-5" href={"./"}>
          Home
        </Link>
        <Link className="p-5 " href={"./events"}>
          Events
        </Link>
        <Link className="p-5" href={"./sale"}>
          Sales
        </Link>
        <Link className="p-5" href={"./contact"}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Nav;
