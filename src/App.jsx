import { useContext } from 'react';
import { BooksContext } from './Data/bookcontext';

function App() {
  const { booksData, loading, error } = useContext(BooksContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {booksData.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
