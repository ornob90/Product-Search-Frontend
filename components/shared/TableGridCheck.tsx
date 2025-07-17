import React from "react";
import { FaTableList } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { ViewType } from "../products/ProductFilter";
import Link from "next/link";

interface TableGridCheckProps {
  view: ViewType;
}

const TableGridCheck = ({ view }: TableGridCheckProps) => {
  return (
    <section className="flex items-center justify-end text-xl gap-x-4">
      <Link href={`?view=table`}>
        <IconWrapper isActive={view === "table"}>
          <FaTableList />
        </IconWrapper>
      </Link>
      <Link href={`?view=grid`}>
        <IconWrapper isActive={view === "grid"}>
          <IoGridOutline />
        </IconWrapper>
      </Link>
    </section>
  );
};

function IconWrapper({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <section
      className={`flex items-center justify-center p-2  rounded-xl ${isActive ? "text-white bg-dark" : " bg-white text-black"}`}
    >
      {children}
    </section>
  );
}

export default TableGridCheck;
