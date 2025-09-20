// import { IProduct } from "@/type";
// import Image from "next/image";
// import Link from "next/link";


// export default function ProductCard({ product }: { product: IProduct }) {
//   return (
//     <div
//       className="bg-white shadow-lg rounded-lg overflow-hidden 
//         transform hover:scale-105 transition-transform duration-300"
//     >
//       <div className="relative w-full h-52 object-contain">
//         <Image
//           src={product?.image}
//           alt={product?.product_name}
//           width={500}
//           height={500}
//           className="rounded-t-lg h-56 object-contain w-full"
//         />
//       </div>

//       <div className="p-6">
//         <div className="flex justify-center items-center">
//           <h2>{product?.product_name}</h2>
//           <span
//             className=" ml-4 bg-blue-100 text-blue-800
//            text-xs font-semibold uppercase tracking-wide py-1 px-3 rounded-lg"
//           >
//             {product?.category}
//           </span>
//         </div>
//         <p className="text-sm text-gray-600 mb-1">
//           Brand: <span className="font-medium">{product?.brand}</span>
//         </p>
//         <p className="text-sm text-gray-600 mb-1">${product?.price}</p>
//         <div className="mt-6 flex font-bold justify-between items-center">
//           <Link
//             href={`/products/${product?.id}`}
//             className="bg-black text-white py-2 px-5 rounded-lg shadow-md
//              hover:bg-blue-700 transition-all"
//           >
//             see Details
//           </Link>
//           <button
//             className="bg-black text-white py-2 px-5 rounded-lg shadow-md
//           hover:bg-blue-700 transition-all"
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { IProduct } from "@/type";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden 
        transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative w-full h-52">
        <Image
          src={product?.image}
          alt={product?.product_name}
          width={500}
          height={500}
          className="rounded-t-lg h-56 w-full object-contain"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-center items-center">
          <h2 className="font-bold">{product?.product_name}</h2>
          <span
            className="ml-4 bg-blue-100 text-blue-800
           text-xs font-semibold uppercase tracking-wide py-1 px-3 rounded-lg"
          >
            {product?.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-1">
          Brand: <span className="font-medium">{product?.brand}</span>
        </p>
        <p className="text-sm text-gray-600 mb-1">${product?.price}</p>
        <div className="mt-6 flex font-bold justify-between items-center">
          <Link
            href={`/products/${product?.id}`}
            className="bg-black text-white py-2 px-5 rounded-lg shadow-md
             hover:bg-blue-700 transition-all"
          >
            See Details
          </Link>
          <button
            className="bg-black text-white py-2 px-5 rounded-lg shadow-md
          hover:bg-blue-700 transition-all"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
