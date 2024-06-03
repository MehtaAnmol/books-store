async function fetchData(){
  
    const response = await fetch('https://freetestapi.com/api/v1/books');
    // console.log(response);
    const booksDetails = await response.json();
    return booksDetails;
}

export default fetchData;