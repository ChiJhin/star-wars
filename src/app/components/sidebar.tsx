'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import SidebarItem from './sidebarItem';
import Link from 'next/link';

interface sidebarProps {
  children?: React.ReactNode;
}

const Sidebar = ({ children }: sidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-40 w-40 h-screen">
      <Link href="/" className="text-green-600">
        To main
      </Link>
      <ul className="space-y-7 ">
        <SidebarItem current={pathname === '/planets'} pathname="/planets">
          Planets
        </SidebarItem>
        <SidebarItem current={pathname === '/wariors'} pathname="/wariors">
          Wariors
        </SidebarItem>
      </ul>
      {children}
    </aside>
  );
};

export default Sidebar;
