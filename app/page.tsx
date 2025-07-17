import ProductFilter from "@/components/products/ProductFilter";
import ProductHeader from "@/components/products/ProductHeader";
import React from "react";

const Home = ({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const view = searchParams?.view === "grid" ? "grid" : "table"
  return (
    <section className="space-y-4 ">
      <ProductHeader />
      <ProductFilter view={view}/>
    </section>
  );
};

export default Home;
