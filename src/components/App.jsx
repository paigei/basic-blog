import { useEffect, useState } from "react"
import Nav from "./Nav.jsx"
import Article from "./Article.jsx"
import ArticleEntry from "./ArticleEntry.jsx"
import { SignIn, SignOut } from "./auth.jsx"
import { useAuthentication } from "../services/authservice.jsx"
import { fetchArticles, createArticle } from "../services/articleService.js"
import "./App.css"

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const user = useAuthentication()

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  // Function to reset to the initial screen
  function goHome() {
      setArticle(null);
      setWriting(false);
  }

  return (
    <div className="App">
      <header>
        Crochet Diary!
        <button onClick={goHome} className="home-button">Home</button>
        {!user ? <SignIn /> : <SignOut />}
      </header>
      {!user ? "" : <Nav articles={articles} setArticle={setArticle} user={user} setWriting={setWriting}/>}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} />
      )}
    </div>
  )
}
