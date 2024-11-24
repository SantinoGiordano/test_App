import Link from "next/link";
import React from "react";


const Nav = () => {
  return (
    <>
      <div className='text-right text-xl text-white p-10 bg-slate-500'>
        <Link className="p-5" href={"./"}>
          Home
        </Link>
        <Link className="p-5 " href={"./product"}>
          Product
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
