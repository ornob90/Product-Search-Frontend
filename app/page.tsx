import ProductFilter from "@/components/products/ProductFilter";
import ProductHeader from "@/components/products/ProductHeader";
import ProductsTable from "@/components/products/ProductsTable";
import React from "react";

const Home = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const view = (await searchParams)?.view === "grid" ? "grid" : "table";
  return (
    <section className="space-y-4 ">
      <ProductHeader />
      <ProductFilter view={view} />
      <ProductsTable />
    </section>
  );
};

export default Home;
