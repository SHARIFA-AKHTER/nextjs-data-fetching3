// import React from "react";
// import ProductCard from "../components/products/ProductCard";
// import { IProduct } from "@/type";

// const ProductPage = async () => {
//   const res = await fetch("http://localhost:5000/products");
//   const products = await res.json();
//   console.log(products);
//   return (
//     <div>
//       <h1 className="mx-auto text-center text-2xl">AllProduct</h1>
//       <div>
//         {products.map((product:IProduct) => {
//          <ProductCard key={product?.id} product={product}/>;
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React from "react";
import ProductCard from "../components/products/ProductCard";
import { IProduct } from "@/type";

const ProductPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    // cache: "force-cache", 
     cache: "no-store", 

    // next: {
    //      revalidate: 30, // deploy korer por 5 secend por data te kisu change korla sola asba

    //     // tags: ["products"]
    // },
  });
  const products: IProduct[] = await res.json();

  return (
    <div>
      <h1 className="mx-auto text-center text-2xl my-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {products.map((product: IProduct) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

