import Document, { Html, Head, Main, NextScript } from 'next/document';
import Analytics from '../components/Analytics';
import Facebook from '../components/Facebook';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Igor Franzotti - Aquarelista" />
          <meta name="facebook-domain-verification" content="90dp4v8alc0r7mvf274w4u08bokjiw" />
          <meta property="og:title" content="Igor Franzotti" />
          <meta property="og:description" content="Introdução aos fundamentos da aquarela. Tudo de uma forma simples e prática." />
          <meta property="og:image" content="https://igorfranzotti.com/images/perfil-igor-franzotti.jpg" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Facebook />
          <Analytics />
        </body>
      </Html>
    )
  }
}