import type { ParentProps } from 'solid-js';
import { HydrationScript } from '@solidjs/web';
import { Link, Title } from '@solidjs/meta';

export default function Document(props: ParentProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ed1c24" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://maeri.nojufe.de" />
        <meta name="og:image" content="https://maeri.nojufe.de/logo.png" />
        <Link rel="icon" href="/favicon.ico" />
        <Title>Maeri</Title>
        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
