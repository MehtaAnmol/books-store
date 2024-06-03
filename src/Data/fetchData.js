async function fetchData(){
    const response = await fetch('https://freetestapi.com/api/v1/books');
    const booksDetails = await response.json();
    return booksDetails;
}

export default fetchData;