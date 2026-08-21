import type { ParentProps } from 'solid-js';
import { HydrationScript } from '@solidjs/web';
import { Link, Meta, Title } from '@solidjs/meta';

export default function Document(props: ParentProps) {
  return (
    <html lang="en">
      <head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#ed1c24" />
        <Meta name="og:title" content="Maeri" />
        <Meta name="og:type" content="website" />
        <Meta name="og:url" content="https://maeri.nojufe.de" />
        <Meta name="og:image" content="https://maeri.nojufe.de/logo.png" />
        <Meta name="og:description" content="The official Getriš Conlang Documentation and Reference" />
        <Link rel="icon" href="/favicon.ico" />
        <Title>Maeri</Title>
        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
