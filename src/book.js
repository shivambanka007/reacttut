export const Book = (props) => {
  const { img, author, title } = props.book;
  //Adding attribute, eventHandler
  //onClick , onMouseOver
  const clickHandler = (author) => {
    alert(author);
  };
  return (
    <article className="book">
      <img
        alt=""
        src={img}
        onMouseOver={() => {
          console.log(title);
        }}
      ></img>
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button">Click Me</button>
      <button type="button" onClick={() => clickHandler(author)}>
        Cmplexify
      </button>
    </article>
  );
};
