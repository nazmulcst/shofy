import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

export const getData = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export default async function Home() {
  const products = await getData();

  return (
    <main>
      <Banner />
      <ProductList productsData={products} />
    </main>
  );
}
