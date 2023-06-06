// TODO: Import API_ENDPOINT
import {API_ENDPOINT} from "./index"

// TODO: Create the addNewBook function that takes in newTitle, newStart, and newEnd as arguments. Inside the function, create a POST request for the new book. Store the response as a JSON in a variable called newBook and return it at the end of the function.
export async function addNewBook(newTitle, newStart, newEnd){
    const response = await fetch(`${API_ENDPOINT}/books`,{
        method: "POST",
        body: JSON.stringify({
            title: newTitle,
            start: newStart,
            end: newEnd
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })

    const newBook = await response.json();
    return newBook;
}
// TODO: Create the getBooks function that retrieves all of the books that have been saved to the back-end API
export async function getBooks(){
  const response = await fetch(`${API_ENDPOINT}/books`);
  const books = await response.json();

  return books;
}
