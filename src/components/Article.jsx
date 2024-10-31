export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <div>
          <h2>Welcome!!</h2>
          <p>No article selected</p>
        </div>
      ) : (
        <section>
          <h2 className="title">{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}
