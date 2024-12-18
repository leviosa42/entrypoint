export interface PostCardProps {
  title: string;
  description?: string;
  url: string;
  pubDate: string;
  tags: string[];
}

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
      </a>
      <p>{description}</p>
      {tags.length > 0 && <span>{tags.join(", ")}</span>}
    </div>
  );
};
