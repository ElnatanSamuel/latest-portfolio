import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Ensure initial paint is black to avoid any flash before Splash mounts */}
        <meta name="theme-color" content="#000000" />
        <style>{`html,body{background:#000;}`}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
