import Link from "next/link";
import React from "react";

interface Props {}

function Product(props: Props) {
  return (
    <>
      <Link href="/product/1">
        <h1>Product 1</h1>
      </Link>

      <Link href="/product/2">
        <h1>Product 2</h1>
      </Link>

      {/* for ful back to root */}

      <Link href="/product/3" replace>
        <h1>Product 3</h1>
      </Link>
    </>
  );
}

export default Product;
