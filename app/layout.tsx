import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from 'next/font/google';

// Font bawaan Next.js (boleh ganti kalau mau)
const inter = Inter({ subsets: ['latin'] });

// Metadata website (judul dan deskripsi)
export const metadata = {
  title: 'Portfolio Saya',
  description: 'Website portfolio menggunakan Next.js dan Bootstrap',
};

// Komponen utama layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* body berisi semua konten halaman */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
