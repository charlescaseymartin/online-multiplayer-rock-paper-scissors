import RockPaperScissors from '@/components/screens/combat';
import PageLayout from '@/components/shared/pageLayout';


export default function Area() {
  console.log('check if connected to lobby before loading');
  
  return (
    <PageLayout>
      <RockPaperScissors />
    </PageLayout>
  )
}