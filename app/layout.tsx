import './global.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: {
    default: 'Tree.ly',
    description: 'Tree.ly application',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
