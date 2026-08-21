import type { ParentProps } from 'solid-js';
import { HydrationScript } from '@solidjs/web';

export default function Document(props: ParentProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ed1c24" />
        <meta name="og:title" content="Maeri" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://maeri.nojufe.de" />
        <meta name="og:image" content="https://maeri.nojufe.de/favicon.ico" />
        <meta name="og:description" content="The official Getriš Conlang Documentation and Reference" />
        <link rel="icon" href="/favicon.ico" />
        <title>Maeri</title>
        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
