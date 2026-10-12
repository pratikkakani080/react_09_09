import React, { useEffect } from "react";

function Products() {
  useEffect(() => {
    fetch("https://dummyjson.com/products", {
      method: "POST",
      body: JSON.stringify({ title: "laptop" }),
    });
  }, []);

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts");
  };

  const createPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    });
  };

  const updatePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH", // PUT
      body: JSON.stringify({
        title: "foo",
      }),
    });
  };

  const deletePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
  };

  return (
    <>
    <button onClick={getPosts}>Get Post</button>
    <button onClick={createPost}>Create Post</button>
    <button onClick={updatePost}>Update Post</button>
    <button onClick={deletePost}>Delete Post</button>
    </>
);
}

export default Products;
