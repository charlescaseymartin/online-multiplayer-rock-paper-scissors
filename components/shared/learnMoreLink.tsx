import Link from 'next/link'


type LearnMoreLinkType = {
  href: string;
}

export default function LearnMoreLink({ href }: LearnMoreLinkType) {
  return (
    <Link href={href} className='text-primary whitespace-nowrap hover:underline'>
      Learn more
    </Link>
  )
}