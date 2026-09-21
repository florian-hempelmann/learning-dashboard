'use client';

import Link from 'next/link';

import {
  CodeBracketSquareIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import { usePathname } from "next/navigation";
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Technologies & Tools', href: '/dashboard/technologies', icon: CodeBracketSquareIcon,},
  { name: 'Learning Goals', href:'/dashboard/learning-goals', icon: DocumentDuplicateIcon},
  { name: 'Projects', href: '/dashboard/projects', icon: DocumentDuplicateIcon },
  { name: 'Certificates', href: '/dashboard/certificates', icon: DocumentDuplicateIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                    'flex h-12 grow items-center justify-center gap-2 p-3 text-sm font-medium ' +
                    'md:flex-none md:justify-start md:pl-3 hover:text-primary-foreground',
                    {'text-surface-foreground': !isActive},
                    {'nav-link-active bg-background text-foreground': isActive},
                )}
            >
              <LinkIcon className="w-6"/>
              <p className="hidden md:block">{link.name}</p>
            </Link>
        );
      })
    }
    </>
  )}