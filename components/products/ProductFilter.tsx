import { categories } from "@/data/categories";
import Select from "@/components/shared/Select";
import React from "react";
import TableGridCheck from "../shared/TableGridCheck";

export type ViewType = "table" | "grid";

interface ProductFilterProps {
  view: ViewType;
}

const ProductFilter = ({ view }: ProductFilterProps) => {
  return (
    <section className="flex items-center justify-between">
      <section className="flex items-center gap-x-4">
        <Select
          options={categories}
          placeholder="Category"
          // label="Category"
          className=" w-36 bg-gray-50 !text-xs"
          size="sm"
          query
          queryKey="category"
          isClearable
        />
        <Select
          options={categories}
          placeholder="Quantity"
          // label="Quantity"
          className=" w-36 bg-gray-50 !text-xs"
          size="sm"
          query
          queryKey="quantity"
          isClearable
        />
      </section>
      <TableGridCheck view={view} />
    </section>
  );
};

export default ProductFilter;
