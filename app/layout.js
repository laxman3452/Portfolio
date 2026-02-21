import './globals.css';

export const metadata = {
  title: 'Alex Nova | Portfolio CV',
  description:
    'Portfolio CV of Alex Nova — Web, Mobile, AI/ML Engineer and Math & Science Teacher.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
