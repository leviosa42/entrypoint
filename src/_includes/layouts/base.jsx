export const js = `
                  let theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                  : "light");
                  document.documentElement.dataset.theme = theme;
                  function changeTheme() {
                    theme = theme === "dark" ? "light" : "dark";
                    localStorage.setItem("theme", theme);
                    document.documentElement.dataset.theme = theme
                  }
`;
export default (data, helpers) => {
  const { header, children } = data;
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
              class="button header-theme"
              id="theme"
            >
              <span class="icon">◐</span>
            </button>
            <script
              dangerouslySetInnerHTML={{ __html: `document.getElementById("theme").onclick = () => changeTheme();` }}
            />
            <img className="header-avatar" src={header.avatar} alt="Avatar" transform-images="webp avif 200@2" />
            <h1 className="header-title">{header.title}</h1>
            {header.description && header.description}
          </header>
          {children}
        </main>
      </body>
    </html>
  );
};
