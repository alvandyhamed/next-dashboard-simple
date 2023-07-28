import React from "react";

async function PostDetails({ params }: { params: { postId: string } }) {
  const post = await getData(params.postId);

  return <div>{post.body}</div>;
}

export default PostDetails;

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
