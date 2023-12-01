import Link from 'next/link';

type NavItemType = {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: NavItemType) {
  return (
    <li>
      <Link href={href} className='duration-300 font-medium ease-linear hover:text-primary py-3'>
        {text}
      </Link>
    </li>
  )
}