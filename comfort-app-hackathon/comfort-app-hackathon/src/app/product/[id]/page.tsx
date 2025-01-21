
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { BsCartDash } from "react-icons/bs";
import Link from "next/link";
import SingleProductPage from "@/components/products/SingleProductPage";

const query = `*[_type == "products" && _id == $id][0] {
  _id,
  title,
  price,
  priceWithoutDiscount,
  badge,
  "productImage": image.asset->url,
  "categoryTitle": category->title,
  description,
  inventory,
  tags
}`;

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  productImage: string;
  categoryTitle?: string;
  description: string;
  inventory?: number;
  tags?: string[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      client.fetch<Product>(query, { id }).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <main>
      <div>
        <div className="flex md:flex-row flex-col mt-5 gap-10 lg:p-10 p-3 sm:mx-10 mx-3 lg:mx-20">
          <div className="md:w-1/2 mx-auto">
            <img
              src={product.productImage}
              alt={product.title}
              className="rounded-xl object-cover w-[260px] h-[260px] hover:drop-shadow-xl sm:w-full sm:h-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col mx-5 lg:mx-14">
  <div className="lg:pb-6 pb-3 border-b border-[#D9D9D9]">
    <h2 className="lg:text-6xl text-2xl md:text-4xl text-[#272343] font-bold mb-4 md:mb-7">
      {product.title}
    </h2>
    <span className="text-[18px] font-medium w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-2 text-white bg-[#029FAE]">
      ${product.price.toFixed(2)}
    </span>
  </div>
  
  <p className="text-[#272343]/60 tracking-wide text-sm md:text-lg">
    {product.description}
  </p>

  <div className="mt-6">
    <button className="w-fit rounded-lg md:mt-5 mt-2 md:px-4 px-2 items-center md:gap-3 gap-1 py-2 md:py-3 text-white bg-[#029FAE] flex">
      <BsCartDash className="size-5" />
      <Link href="/cart">Add To Cart</Link>
    </button>
  </div>
</div>
</div>

        <SingleProductPage/>
      </div>
    </main>
  );
};

export default ProductDetail;