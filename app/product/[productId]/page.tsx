"use client";
import Link from "next/link";
import React from "react";

function ProductDetail({ params }: { params: { productId: string } }) {
  return (
    <div>
      {/* <Link href={`/product/${params.productId}/review`}> */}
      <h1>ProductDetail{params.productId}</h1>
      {/* </Link> */}
      <Link href={`/product/${params.productId}/reviewId+${params.productId}`}>
        <h3>For review touch hear</h3>
      </Link>
    </div>
  );
}

export default ProductDetail;
