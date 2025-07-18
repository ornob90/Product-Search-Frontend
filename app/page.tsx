import ProductFilter from "@/components/products/ProductFilter";
import ProductHeader from "@/components/products/ProductHeader";
import ProductsTable from "@/components/products/ProductsTable";
import React from "react";

const Home = async ({
  searchParams,
}: {
  searchParams?: any;
}) => {
  const view = searchParams?.view === "grid" ? "grid" : "table";
  return (
    <section className="space-y-4 ">
      <ProductHeader />
      <ProductFilter view={view} />
      <ProductsTable />
    </section>
  );
};

export default Home;
