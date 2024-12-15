interface Props {
  textColor: (hex: string) => string;
  header: {
    title: string;
    avatar: string;
    description?: string;
  };
  metas: {
    title: string;
    description: string;
    image: string;
    generator: boolean;
    twitter: string;
  };
  links: {
    type: string;
    href: string;
    text: string;
    hex?: string;
    textColor?: string;
    only_icon?: boolean;
  }[];
  children: JSX.Element;
}
export default (
  { textColor, html2react, header, links, children }: Props & Lume.Data,
  { simpleicons }: Lume.Helpers,
) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <title>{header.title}</title>

        <meta name="supported-color-schemes" content="light dark" />
        <meta name="theme-color" content="hsl(220, 20%, 100%)" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="hsl(220, 20%, 10%)" media="(prefers-color-scheme: dark)" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="canonical" href="/" />
      </head>
      <body>
        <main>
          <header className="header">
            {/* TODO: テーマ切り替えボタンの実装の行儀が悪いので修正 */}
            {
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  let theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                  : "light");
                  document.documentElement.dataset.theme = theme;
                  function changeTheme() {
                    console.log("changeTheme");
                    theme = theme === "dark" ? "light" : "dark";
                    localStorage.setItem("theme", theme);
                    document.documentElement.dataset.theme = theme
                  }
                  `,
                }}
              />
            }
            <button
              className="button header-theme"
              id="theme"
            >
              <span className="icon">◐</span>
            </button>
            <script
              dangerouslySetInnerHTML={{ __html: `document.getElementById("theme").onclick = () => changeTheme();` }}
            />
            <img className="header-avatar" src={header.avatar} alt="Avatar" transform-images="webp avif 200@2" />
            <h1 className="header-title">{header.title}</h1>
            {header.description && header.description}
          </header>

          {((icons) => {
            if (icons.length === 0) {
              return;
            }
            return (
              <ul className="icon-list">
                {icons.map((link, idx) => {
                  const hex = simpleicons(link.type, "hex");
                  return (
                    <li className="icon-list-item" key={idx}>
                      <a
                        href={link.href}
                        className="button"
                        style={{
                          "--bg-color": link?.hex || `#${hex || "fff"}`,
                          "--text-color": link?.textColor || textColor(hex || "fff"),
                        } as React.CSSProperties}
                      >
                        {html2react(simpleicons(link.type, "svg"))}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })(links.filter((link) => link.only_icon))}

          <ul className="link-list">
            {links.filter((link) => !link.only_icon).map((link, idx) => {
              const hex = simpleicons(link.type, "hex");
              return (
                <li className="link-list-item" key={idx}>
                  <a
                    href={link.href}
                    className="button"
                    style={{
                      "--bg-color": link?.hex || `#${hex || "fff"}`,
                      "--text-color": link?.textColor || textColor(hex || "fff"),
                    } as React.CSSProperties}
                  >
                    {html2react(simpleicons(link.type, "svg"))}
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
          {children}
        </main>
      </body>
    </html>
  );
};
