'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Header.module.css';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
] as const;

function isActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

function HeaderView({ pathname }: { pathname: string | null }) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="TravelTrucks — головна сторінка">
          <Image
            className={styles.logoImage}
            src="/logo.svg"
            alt=""
            width={136}
            height={15}
            unoptimized
          />
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_ITEMS.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={active ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function HeaderFallback() {
  return <HeaderView pathname={null} />;
}

export default function Header() {
  return <HeaderView pathname={usePathname()} />;
}
