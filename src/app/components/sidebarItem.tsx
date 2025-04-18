import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export interface SidebarItemProps {
  current?: boolean;
  pathname: string;
  children: React.ReactNode;
}

function SidebarItem({ current, pathname, children }: SidebarItemProps) {
  return (
    <li key={Math.random()}>
      <Link
        href={pathname}
        className={clsx(
          'flex items-center h-9 mx-6 gap-3.5',
          current &&
            ' after:h-1 after:w-3 after:m-auto after:border-2 after:border-green-600 after:rounded-sm',
        )}
      >
        <span className="font-medium text-green-600">{children}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;
