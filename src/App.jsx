
import { Link, Outlet } from 'react-router-dom';
import { useFetchBooks } from './Data/useFetchBooks';


export default function App(){
  const {booksData, loading, error} = useFetchBooks;
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return(
    <>
      {booksData ? <Display booksData = {booksData}/> : <p>nothing to see here</p>}
    </>
  )
}

function Display({booksData}){
  const [book1] = booksData;
  return(
    <>
     <p>{book1.title}</p>
      <h3>hello</h3>
      <Link to = '/'>Home</Link>
      <Link to = 'about'>About</Link>
      <Outlet/>
    </>
  )
}
