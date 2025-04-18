import React from 'react';

interface pageProps {
  children: React.ReactNode;
}

const Page = ({ children }: pageProps) => {
  return (
    <div>
      <h1 className="text-green-600">Wariors</h1>
      {children}
    </div>
  );
};

export default Page;
