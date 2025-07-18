import React from "react";
import Search from "../shared/Search";
import { Button } from "@heroui/button";
import AddProduct from "./AddProduct";


const ProductHeader = () => {
  return (
    <section className="flex items-center justify-between">
      <Search className="w-2/5 " />
      <div className="flex items-center justify-end gap-x-4">
        <Button
          color="default"
          variant="bordered"
          className="text-black bg-white border-dark "
        >
          Create Category
        </Button>
        <AddProduct />
      </div>
    </section>
  );
};

export default ProductHeader;
