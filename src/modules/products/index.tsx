import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../lib/axios/config";

function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ Products ~ products:", products);

  useEffect(() => {
    // setLoading(true);
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((response) => {
    //     setProducts(response.products);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    getProducts();
  }, []);

  // axios
  const getProducts = async () => {
    try {
      const res = await Api.get("https://dummyjson.com/products");
      setProducts(res.products);
    } catch (error) {
      console.log(error);
    }
  };

  // async..await
  // try..catch
  // const getProducts = async () => {
  //   try {
  //     setLoading(true);
  //     let res = await fetch("https://dummyjson.com/products");
  //     let data = await res.json();
  //     setProducts(data.products);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts");
  };

  const createPost = () => {
    // axios
    Api.post("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
    // fetch
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }),
    // });
  };

  const updatePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH", // PUT
      body: JSON.stringify({
        title: "foo",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) getPosts();
      });
  };

  const deletePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
  };

  if (loading) {
    return "loading";
  }

  console.log("🚀 ~ Products ~ products:", products);
  return (
    <>
      <button onClick={getPosts}>Get Post</button>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((el, i) => {
          return (
            <div key={i}>
              <h4>{el.title}</h4>
              <img src={el.thumbnail} alt="img" />
              <span>{el.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
