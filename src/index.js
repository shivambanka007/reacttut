import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import { Book } from "./book";
//This function is a component(stateless)
//JSX always result a single element.
//For nesting

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

//By using the Greeting component as a tag, we are telling React that Greeting is a component
ReactDOM.render(<BookList />, document.getElementById("root"));
