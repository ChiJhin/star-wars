import React from 'react';
import Sidebar from './components/sidebar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Sidebar />
          <div className="ml-44">{children}</div>
        </main>
      </body>
    </html>
  );
}
