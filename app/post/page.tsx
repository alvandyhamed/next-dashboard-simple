import Link from "next/link";
import React from "react";

interface Props {}

async function Posts(props: Props) {
  const PostData = await getData();
  return (
    <>
      {PostData?.map((post: any) => {
        return (
          <>
            <Link href={`/post/${post.id}`} passHref>
              <h1>{post.title}</h1>
            </Link>
          </>
        );
      })}
    </>
  );
}

export default Posts;

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
