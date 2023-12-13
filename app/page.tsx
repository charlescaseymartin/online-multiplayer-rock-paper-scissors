import RockPaperScissors from '@/components/screens/combat';
import Container from '@/components/shared/container';
import Paragraph from '@/components/shared/paragraph';
import Title from '@/components/shared/title';


export default function Home() {
  return (
    <main className='pt-20 md:pt-24'>
      <Container>
        <div className='flex justify-center w-full'>
          <Title>
            Welcome to Online Multiplayer Rock Paper Scissors!
          </Title>
        </div>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Facilis ipsum laudantium mollitia consequatur, impedit deleniti sapiente itaque optio,
          reiciendis magni repudiandae ad sint natus, obcaecati nesciunt quo nam laborum! Architecto?
        </Paragraph>
        <RockPaperScissors />
      </Container>
    </main>
  )
}