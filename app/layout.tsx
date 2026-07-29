import './globals.css';
import { Sora } from 'next/font/google';

const sora = Sora({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'ESP32 IoT Dashboard',
  description: 'Real-time telemetry and hardware controls',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>{children}</body>
    </html>
  );
}
