import Image from "next/image";
// import nextImg from "../../assets/nextjs-image.png"
 import nextImg from "@/assets/nextjs-image.png"
/* eslint-disable @next/next/no-img-element */
const GalleryPage = () => {
  return (
    <div className="text-center">
      <h1>Regular Image tag</h1>

      <img
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxENAMoAGBECTni9MRiv3ftth3YASuQ3ICNOWMDAe99AQ72kMpu0Tir0cAoVuV0JmiDrE&usqp=CAU"
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>Nextjs Image component</h1>

      <Image
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxENAMoAGBECTni9MRiv3ftth3YASuQ3ICNOWMDAe99AQ72kMpu0Tir0cAoVuV0JmiDrE&usqp=CAU"
        alt="Next Image"
        width={500}
        height={500}
        className="mx-auto"
      />

       <h1>Local Nextjs Image component</h1>

      <Image
       src={nextImg}
        alt="Next Image"
        width={500}
        height={500}
        className="mx-auto"
      />

       <h1>Local Nextjs Image component</h1>

      <Image
       src={ nextImg }
        alt="Next Image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
