import React from "react";

async function Users() {
  const data = await getData();

  return (
    <>
      {data?.map((user: any) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Users;

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
