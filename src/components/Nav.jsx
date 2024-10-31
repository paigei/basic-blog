export default function Nav({ articles, setArticle, user, setWriting }) {
  return (
    <nav>
      {user && <button class="new-art" onClick={() => setWriting(true)}>New Article</button>}
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  )
}
