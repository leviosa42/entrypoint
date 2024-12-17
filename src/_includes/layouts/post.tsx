import { PostCardProps } from "../../components/PostCard.tsx";
export default ({
  title,
  description,
  url,
  pubDate,
  tags,
  children,
}: PostCardProps & Lume.Data, helpers: Lume.Helpers) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>

        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="canonical" href="/" />
      </head>
      <body>
        <main>
          <h1>{title}</h1>
          {children}
        </main>
      </body>
    </html>
  );
};
