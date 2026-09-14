'use client';

import Link from 'next/link';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import { usePathname } from "next/navigation";
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Technologies & Tools',
    href: '/dashboard/technologies',
    icon: DocumentDuplicateIcon,
  },
  { name: 'My Projects', href: '/dashboard/my-projects', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'flex h-12 grow items-center justify-center gap-2 rounded-md navtab p-3 text-sm font-medium ' +
                'md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'navtab-active': pathname === link.href,
                },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
