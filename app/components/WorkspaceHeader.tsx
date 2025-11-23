'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function WorkspaceHeader() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/workspace', label: 'Home' },
    { href: '/workspace/messages', label: 'Messages' },
    { href: '/workspace/products', label: 'Products' },
    { href: '/workspace/published', label: 'Published' },
    { href: '/workspace/library', label: 'Library' },
  ];

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/workspace" className="text-2xl font-bold text-gray-900">
            WorkSpace
          </Link>
          <nav className="flex gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== '/workspace' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

