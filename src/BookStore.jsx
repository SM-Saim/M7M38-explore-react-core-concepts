import Book from "./Book";
export default function BookStore({ books }) {
  return (
    <div>
      <h2>Books:{books.length}</h2>
      {books.map((bookish) => (
        <Book book={bookish}></Book>
      ))}
    </div>
  );
}
