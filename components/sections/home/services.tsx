import Service, { ServiceItemType } from '@/components/cards/service';
import Container from '@/components/shared/container';
import Paragraph from '@/components/shared/paragraph';
import Title from '@/components/shared/title';


const WebDevIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-globe'>
      <circle cx='12' cy='12' r='10' />
      <line x1='2' y1='12' x2='22' y2='12' />
      <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
    </svg>
  )
}

const WebDesignIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-layout'>
      <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
      <line x1='3' y1='9' x2='21' y2='9' />
      <line x1='9' y1='21' x2='9' y2='9' />
    </svg>
  )
}

const SEOIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-search'>
      <circle cx='11' cy='11' r='8' />
      <line x1='21' y1='21' x2='16.65' y2='16.65' />
    </svg>
  )
}

const services: ServiceItemType[] = [
  {
    title: 'Web Development',
    description: `Aiming for flawless functionality and user-friendly experiences that exceed expectations. \nI'll put the power of web technology in your hands.`,
    icon: <WebDevIcon />,
    href: '/services#development',
  },
  {
    title: 'Web Design',
    description: `When it comes to visuals, I know your custom want the best. \n That's why I don't spare no expense in crafting designs the align with your brand!`,
    icon: <WebDesignIcon />,
    href: '/services#design',
  },
  {
    title: 'SEO',
    description: `What's the point of a beautiful website if no one sees and uses it? \n That's why we optimize your website content and elements so you can reach your potential clients.`,
    icon: <SEOIcon />,
    href: '/services#seo',
  },
]

export default function Services() {
  return (
    <section id='services' className='py-5 my-16'>
      <Container className='space-y-10 md:sapce-y-12'>
        <div className='text-center max-w-3xl mx-auto space-y-4'>
          <Title>What I offer</Title>
          <Paragraph>
            Is a web experience backed by experience.
            <br />
            I'd like to take your brand and showcase it on a digital platform that leaves your user's amazed!
          </Paragraph>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {services.map((service, idx) => <Service key={`${idx}-${service.title}`} {...service} />)}
        </div>
      </Container>
    </section>
  )
}