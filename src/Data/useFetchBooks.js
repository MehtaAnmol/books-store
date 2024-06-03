import fetchData from "./fetchData";
import { useState, useEffect } from "react";

export function useFetchBooks(){
  const [booksData, setBooksData] = useState(null);
  const [loading , setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function books(){
      try{
        const books = await fetchData();
        setBooksData(books);
      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false)
      }
    }
    books()
  }, [])
  return {booksData, loading, error};
}