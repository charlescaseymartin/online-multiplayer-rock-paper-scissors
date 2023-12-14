import Container from "./container";


type PageLayoutType = {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutType) {
  return (
    <main className='pt-20 md:pt-24'>
      <Container>
        {children}
      </Container>
    </main>
  )
}