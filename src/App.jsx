import { useState, useEffect } from 'react'
import fetchData from './Data/fetchData';


function App(){
  const [booksData, setBooksData] = useState(null);
  const [book1] = booksData;
  
  useEffect(() => {
    async function books(){
      const books = await fetchData();
      setBooksData([...books]);
    }
    books()
  }, [])
  


  return(
    <>
      {booksData && <p>{book1.author}</p>}
      <h3>hello</h3>
    </>
  )
}


export default App