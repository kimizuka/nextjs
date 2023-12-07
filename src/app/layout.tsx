import 'destyle.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { StyledComponentsRegistry } from '@/styling/StyledComponentsRegistry';
import { PageStateProvider } from '@/contexts/PageStateContext';

const noto = Noto_Sans_JP({
  subsets: [ 'latin' ]
});

export const metadata: Metadata = {
  title: 'App Router',
  description: 'description'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={ noto.className }>
        <PageStateProvider>
          <StyledComponentsRegistry>{ children }</StyledComponentsRegistry>
        </PageStateProvider>
      </body>
    </html>
  );
}