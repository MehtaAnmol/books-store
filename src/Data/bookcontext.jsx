import { useState, createContext, useEffect } from "react";

export const BooksContext = createContext();

export default function BooksProvider({children}){
    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('https://freetestapi.com/api/v1/books');
                if(!response.ok) throw new Error(response.statusText)
                const booksDetails = await response.json();
                console.log(booksDetails)
                setBooksData(booksDetails)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[])

    return(
        <BooksContext.Provider value = {{booksData, loading, error}}>
            {children}
        </BooksContext.Provider>
    )
}   
