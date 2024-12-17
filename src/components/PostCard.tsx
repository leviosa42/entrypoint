export interface PostCardProps {
  title: string;
  description?: string;
  url: string;
  pubDate: string;
  tags: string[];
}

export const css = `
.post-card {
  margin-bottom: 2rem;
  background-color: #00ff00;
}
`;

export default ({
  title,
  description,
  url,
  pubDate,
  tags,
}: PostCardProps) => {
  return (
    <div className="post-card">
      <a
        href={url}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        {tags.length > 0 && (
          <ul>
            {tags.map((tag, idx) => <li key={idx}>{tag}</li>)}
          </ul>
        )}
      </a>
    </div>
  );
};
