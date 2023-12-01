import Link from 'next/link';


export enum BtnLinkVariant {
  primary = 'primary',
  secondary = 'secondary',
}

type BtnLinkType = {
  href: string;
  text: string;
  className?: string;
  variant?: BtnLinkVariant;
}

export default function BtnLink({ href, text, className, variant = BtnLinkVariant.primary }: BtnLinkType) {

  const getThemeStyle = (variant: BtnLinkVariant) => {
    if (variant === BtnLinkVariant.primary) {
      return 'bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]';
    }
    return 'text-primary';
  }

  const getTextColor = (variant: BtnLinkVariant) => {
    if (variant === BtnLinkVariant.primary) {
      return 'text-white';
    }
    return 'text-primary';
  }

  return (
    <div className='lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-bg lg:border-0 px-6 lg:px-0'>
      <Link href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`}>
        <span className={`relative ${getTextColor(variant)} z-10`}>
          {text}
        </span>
      </Link>
    </div>
  )
}