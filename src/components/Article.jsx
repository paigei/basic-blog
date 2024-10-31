import { loggedInUserDisplayName } from "../services/authservice";

export default function Article({ article }) {
  const defaultImage = "https://i0.wp.com/tlycblog.com/wp-content/uploads/2023/08/Cover-Image.png?fit=1600%2C2400&ssl=1"; // Replace with a real URL
  const articleImage = article?.image || "https://storage.googleapis.com/ribblr-disk/pics/52295/cover-oi7erl308.jpg"; // Replace with real URLs

  return (
    <article>
      {!article ? (
        <div>
          <h2>Welcome to Crochet Diary!!</h2>
          <p>Click the new article button on the left hand side to add any crochet comments to the community, or you can browse other people's crochet patterns, tips, and advice. All other entries are listed on the left side of this blog, so have fun creating posts or browsing other people's crochet comments. Happy blogging!</p>
          <img src={defaultImage} alt="Welcome" className="welcome-image" />

        </div>
      ) : (
        <section>
          <img src={articleImage} alt={article.title} className="article-image" />
          <h2 className="title">{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}
