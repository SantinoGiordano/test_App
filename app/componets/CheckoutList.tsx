import React from "react";

interface CheckoutListProps {
  items: string[];
}

const CheckoutList: React.FC<CheckoutListProps> = ({ items }) => {
  return (
    <div className="p-10 bg-slate-50 text-black flex-col fixed right-4 top-4 mt-40 rounded border-blue-700 border-[3px] text-right">
      <div>
        Checkout:
        <hr className="h-[3px] bg-blue-500 border-none" />
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckoutList;
