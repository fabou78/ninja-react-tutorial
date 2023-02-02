import { useEffect, useState } from "react";

const useFetch = (url) =>{
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  // The useEffect hook is run every time a component is (re)rendered useful for API calls, Auth etc...
  // it doesn't return anything. Do not use useState inside useEffect
  // [] empty dependency will make useEffect to run only one intially
  useEffect(() => {
    fetch(url)
      .then((response) =>{
        if (!response.ok) {
          throw Error('Coudn\'t fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);  // useState is safe here because we have an empty dependency (it will run once)
        setIsPending(false);
        setError(null);
       })
       .catch((err) => {
        setIsPending(false);
        setError(err.message);
       })
  },[url]);
  return {data, isPending, error};
}

export default useFetch;