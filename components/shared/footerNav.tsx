import Link from "next/link";

export type FooterNavItem = {
  href: string;
  text: string;
}

type FooterNavType = {
  title: string;
  navItems: FooterNavItem[];
}

export default function FooterNav({ title, navItems }: FooterNavType) {
  return (
    <nav className="space-y-6">
      <h2 className="capitalze font-semibold text-heading-2 text-xl">
        {title}
      </h2>
      <ul className="space-y-3 ml-3 font-medium md:text-lg text-heading-3">
        {navItems.map(({ href, text }, idx) => (
          <li key={`${idx}-${text}`}>
            <Link href={href} className="transition hover:text-primary">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}