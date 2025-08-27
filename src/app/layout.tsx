import type { ReactNode } from 'react';

export const metadata = {
  title: 'KokoroLink',
  description: 'Universal invitations and RSVP',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
