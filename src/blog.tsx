import PostCard from "./components/PostCard.tsx";

export const url = "/blog";
export const title = "Blog";
export const description = "My blog";

export default ({ comp, search }: Lume.Data) => {
  const posts = search.pages("type=post");
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>

        <meta name="supported-color-schemes" content="light dark" />
        <meta name="theme-color" content="hsl(220, 20%, 100%)" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="hsl(220, 20%, 10%)" media="(prefers-color-scheme: dark)" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="canonical" href="/" />
      </head>
      <body>
        <main>
          <h1>hi</h1>
          {posts.length > 0
            ? posts.map((post, idx) => (
              <PostCard
                key={idx}
                title={post.title || ""}
                description={post.description}
                url={post.url}
                pubDate={post.pubDate}
                tags={post.tags}
              />
            ))
            : <p>No posts found</p>}
        </main>
      </body>
    </html>
  );
};
