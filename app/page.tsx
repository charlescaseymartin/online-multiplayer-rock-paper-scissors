import Container from '@/components/shared/container';
import Paragraph from '@/components/shared/paragraph';
import Title from '@/components/shared/title';


export default function Home() {
  return (
    <main className='pt-32 lg:pt-36'>
      <Container>
        <div className='flex justify-center w-full'>
          <Title>
            Welcome to my selection of games!
          </Title>
        </div>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Facilis ipsum laudantium mollitia consequatur, impedit deleniti sapiente itaque optio,
          reiciendis magni repudiandae ad sint natus, obcaecati nesciunt quo nam laborum! Architecto?
        </Paragraph>
        
      </Container>
    </main>
  )
}
