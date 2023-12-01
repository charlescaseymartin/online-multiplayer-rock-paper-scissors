import Checkmark from '@/components/shared/checkmark';
import Container from '@/components/shared/container';
import Paragraph from '@/components/shared/paragraph';
import Title from '@/components/shared/title';


const features = [
  'Free Consultation.',
  'Website Analysis.',
  'Website Search Engine Optimization.',
  'Automated Web Tools.',
  'Monthly Blog Content.',
  'High Converting Web Designs.',
  'Brand Inspired Web Designs.',
  'Competitive and Modern Web Development.',
  'Custom Web Development Features.',
  'And so much more!',
];

export default function Features() {
  return (
    <section id='features' className='my-24'>
      <Container className='flex flex-col midmd:flex-row gap-10 lg:gap-12'>
        <div className='flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col'>
          <Title>
            Providing the Services for Cultivating Your Web Presences
          </Title>
          <Paragraph className='mt-8'>
            To cultivate a thriving web presence, constant growth and adaptation are necessary.
          </Paragraph>

          <Paragraph className='mt-2'>
            Businesses must establish a strong online reputation through authentic customer testimonials, engagement,
            regular blog content creation, and sharing industry insights.
          </Paragraph>

          <Paragraph className='mt-2'>
            The services I by provide help aid your businesses with all this.
          </Paragraph>

          <ul className='mt-8 space-y-4 text-heading-3 font-medium'>
            {features.map((feature, idx) => (
              <li key={`${idx}-${feature}`}>
                <Checkmark />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className='max-w-md mx-auto midmd:max-w-none lg:mx-0  lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto'>
          <div className='w-full h-80 sm:h-96 midmd:h-full relative'>
            <div className='absolute rotate-45 -left-5 md:-left-10 lg:-left-20 xl:-left-24 p-1 top-1/2 w-16 h-16 bg-gradient-to-br from-primary to-orange-400 blur-3xl opacity-50' />
            <div className='absolute  p-1 -top-4 md:-top-10 right-0 w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60' />
            <span className='absolute w-full aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-tr from-primary to-green-400 opacity-40 blur-2xl left-0 bottom-0' />
            <img src='/images/dev-with-c.webp' alt='banner image' width='1240' height='1385' className=' w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full' />
          </div>
        </div>
      </Container>
    </section>
  )
}